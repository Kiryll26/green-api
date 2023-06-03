import { Loading, useLoadingState } from 'shared/ui/loading'

export const withLoading = (Component: () => JSX.Element) => () => {
    const isLoading = useLoadingState((state) => state.isLoading)

    return (
        <>
            {<Component />}
            {isLoading ? <Loading /> : null}
        </>
    )
}
