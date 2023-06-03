import * as React from 'react'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { receiveNotification, sendMessage } from 'shared/api'
import { useChatState, useSelectChatState } from 'entities/chat'

const sendMessageSchema = object({
    message: string().min(1, 'Обязательное поле'),
})

type InputTypes = TypeOf<typeof sendMessageSchema>

export const useSendMessage = () => {
    const chatList = useChatState((state) => state.chatList)
    const { setMessage, actChatId } = useSelectChatState((state) => state)
    const dataChat = chatList.find((item) => item.phone === actChatId)
    const methods = useForm<InputTypes>({
        resolver: zodResolver(sendMessageSchema),
    })
    const {
        reset,
        formState: { isSubmitSuccessful },
        handleSubmit,
    } = methods

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])

    React.useEffect(() => {
        let timerId: ReturnType<typeof setTimeout> | null = null
        const getMessages = async () => {
            try {
                const res = await receiveNotification(dataChat!.id, dataChat!.idToken)
                if (!res) return

                if (res.body.typeWebhook === 'outgoingMessageReceived' && actChatId === res.body.senderData.sender) {
                    setMessage({
                        from: 'not_you',
                        text: res?.body?.messageData?.textMessageData?.textMessage,
                    })
                }
            } catch (err: any) {
                toast.error(err.message)
            }
        }

        timerId = setInterval(() => getMessages(), 5000)

        return () => {
            if (timerId) clearInterval(timerId)
        }
    }, [receiveNotification])

    const onSubmit: SubmitHandler<InputTypes> = async (data, ev?: React.BaseSyntheticEvent) => {
        ev?.preventDefault()

        try {
            await sendMessage(actChatId!, data.message, `${dataChat?.id}`!, dataChat!.idToken)
            setMessage({ from: 'you', text: data.message })
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    return { methods, handleSubmit, onSubmit }
}
