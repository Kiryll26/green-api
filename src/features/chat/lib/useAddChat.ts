import * as React from 'react'
import { object, string, TypeOf } from 'zod'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getAccountStatus } from 'shared/api'
import { useChatState } from 'entities/chat'
import { useLoadingState } from 'shared/ui/loading'

const addChatSchema = object({
    id: string().min(1, 'Обязательное поле'),
    idToken: string().min(1, 'Обязательное поле'),
    phone: string().min(1, 'Обязательное поле'),
})

type InputTypes = TypeOf<typeof addChatSchema>

export const useAddChat = () => {
    const navigate = useNavigate()
    const setLoading = useLoadingState((state) => state.setLoading)
    const addChat = useChatState((state) => state.addChat)
    const methods = useForm<InputTypes>({
        resolver: zodResolver(addChatSchema),
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

    const onSubmit: SubmitHandler<InputTypes> = async (data, ev?: React.BaseSyntheticEvent) => {
        ev?.preventDefault()
        setLoading(true)
        try {
            const { phone, ...userData } = data
            const statusAcc = await getAccountStatus(userData)
            if (statusAcc === 'authorized') {
                navigate('/')
                addChat({
                    ...data,
                    phone: `${data.phone}@c.us`,
                })
            }
            setLoading(false)
        } catch (err: any) {
            setLoading(false)
            toast.error(`${err.message}, проверьте ваши данные`)
        }
    }

    return { methods, handleSubmit, onSubmit }
}
