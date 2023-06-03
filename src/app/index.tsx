import * as React from 'react'
import { withProviders } from './providers'
import { ToastContainer } from 'react-toastify'

import { Routing } from 'pages'

const App = () => {
    return (
        <>
            <Routing />
            <ToastContainer />
        </>
    )
}

export default withProviders(App)
