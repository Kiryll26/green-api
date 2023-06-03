import styled from 'styled-components'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface LoadingState {
    isLoading: boolean
    setLoading: (isLoading: boolean) => void
}

export const useLoadingState = create<LoadingState>()(
    devtools((set, get) => ({
        isLoading: false,
        setLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
    }))
)

export const Loading = () => {
    return (
        <Wrap>
            <div>loading</div>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${({ theme }) => theme.colors.txtColor};
    background-color: ${({ theme }) => theme.colors.mainBg};
    z-index: 999;
`
