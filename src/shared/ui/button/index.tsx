import * as React from 'react'
import * as S from './styled'

export type Props<T extends React.ElementType> = {
    render?: keyof JSX.IntrinsicElements | React.ComponentType<any> | T
    className?: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

const ButtonComponent = <T extends React.ElementType = 'button'>({ children, render, ...rest }: Props<T>) => {
    return (
        <S.Button {...rest} as={render}>
            {children}
        </S.Button>
    )
}

export const Button = ButtonComponent
