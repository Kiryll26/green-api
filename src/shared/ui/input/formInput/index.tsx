import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import * as S from '../styled'

type InputProps = {
    name: string
    type?: string
    className?: string
    placeholder?: string
}

export const FormInput = ({ name, className, placeholder = '', type = 'text' }: InputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <>
            <Controller
                control={control}
                defaultValue=''
                name={name}
                render={({ field }) => (
                    <S.Input {...field} type={type} className={className} placeholder={placeholder} />
                )}
            />
            {errors[name] ? <S.TextError>{errors[name].message}</S.TextError> : null}
        </>
    )
}
