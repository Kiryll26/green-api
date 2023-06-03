import * as React from 'react'
import styled from 'styled-components'
import { FormProvider } from 'react-hook-form'

import { Button } from 'shared/ui/button'
import { FormInput } from 'shared/ui/input'
import { useSendMessage } from 'features/chat'

export const Form = () => {
    const { methods, handleSubmit, onSubmit } = useSendMessage()
    return (
        <FormProvider {...methods}>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <FormInput name='message' placeholder='Введите сообщение...' />
                <BtnStyled type='submit'>Отправить</BtnStyled>
            </FormStyled>
        </FormProvider>
    )
}

const FormStyled = styled.form`
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const BtnStyled = styled(Button)`
    height: 100%;
    margin-left: 10px;
`
