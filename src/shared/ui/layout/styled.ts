import styled, { css } from 'styled-components'
import bg from './bg.png'

export const Aside = styled.div`
    ${({ theme }) => css`
        width: ${theme.layout.aside.width};
        background-color: ${theme.colors.mainBg};
    `}
`

export const Sticky = styled.div`
    top: 0;
    position: sticky;
`

export const Content = styled.div`
    max-width: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.colors.dark};
`

export const Layout = styled.div`
    display: grid;
    justify-content: flex-start;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 100vh;
`
