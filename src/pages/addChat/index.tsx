import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'

import { Button } from 'shared/ui/button'
import { FormInput } from 'shared/ui/input'
import { useAddChat } from 'features/chat'

const AddChat = () => {
    const { methods, handleSubmit, onSubmit } = useAddChat()
    return (
        <FormProvider {...methods}>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <FormInput name='id' placeholder='IdInstance' />
                </InputWrap>
                <InputWrap>
                    <FormInput name='idToken' placeholder='ApiTokenInstance' />
                </InputWrap>
                <InputWrap>
                    <FormInput name='phone' placeholder='Телефон' />
                </InputWrap>
                <GridBtns>
                    <Button type='submit'>Добавить чат</Button>
                    <Button render={Link} to={'/'}>
                        Назад
                    </Button>
                </GridBtns>
            </FormStyled>
        </FormProvider>
    )
}

const FormStyled = styled.form`
    padding: 80px 30px;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 500px;
    min-height: 500px;
`

const InputWrap = styled.div`
    margin-top: 20px;
    &:first-child {
        margin-top: 0;
    }
`

const GridBtns = styled.div`
    display: grid;
    column-gap: 20px;
    margin-top: 20px;
    justify-content: space-between;
    grid-template-columns: repeat(2, 120px);
`

export default AddChat
