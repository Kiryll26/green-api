import axios from 'axios'

const baseURL = 'https://api.green-api.com'

const createUrl = (method: string, id: string, ipToken: string, receiptId?: string): string =>
    [baseURL, `waInstance${id}`, method, ipToken, receiptId].join('/')

interface AuthState {
    stateInstance: null | string
}

interface RequestBody {
    chatId: string
    message: string
}

export interface AccountStatusType {
    id: string
    idToken: string
}

export const getAccountStatus = async ({ id, idToken }: AccountStatusType) => {
    const createdUrl = createUrl('getStateInstance', id, idToken)
    const { data }: { data: AuthState } = await axios.get(createdUrl)
    return data.stateInstance
}

export const sendMessage = async (chatId: string, message: any, id: string, idToken: string) => {
    const createdUrl = createUrl('sendMessage', id, idToken)
    const requestBody: RequestBody = { chatId, message }
    const response = await axios.post(createdUrl, requestBody)
    return response
}

const deleteNotification = async (id: string, idToken: string, receiptId: string) => {
    const createdUrl = createUrl('deleteNotification', id, idToken, receiptId)
    const response = await axios.delete(createdUrl)
    return response
}

export const receiveNotification = async (id: string, idToken: string) => {
    try {
        const createdUrl = createUrl('receiveNotification', id, idToken)
        const response = await axios.get(createdUrl)

        if (!response.data) return null

        const { receiptId } = response.data
        await deleteNotification(id, idToken, receiptId)

        return response.data
    } catch (err) {
        return err
    }
}
