import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from 'shared/configs/theme'
import GlobalStyle from '../styles'
import 'react-toastify/dist/ReactToastify.css'

export const withTheme = (Component: () => JSX.Element) => () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle />
            {<Component />}
        </ThemeProvider>
    )
}
