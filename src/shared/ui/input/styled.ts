import styled, { css } from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 50px;
    font-size: 1rem;
    outline: none;
    padding: 0 20px;
    border-radius: 6px;
    border: 0;

    ${({ theme }) => css`
        color: ${theme.colors.txtColor};
        background-color: ${theme.colors.green};
    `}
`

export const TextError = styled.div`
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.red};
`
