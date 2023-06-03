import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from 'shared/ui/loading'

export const withRouter = (Component: () => JSX.Element) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>{<Component />}</Suspense>
        </BrowserRouter>
    )
