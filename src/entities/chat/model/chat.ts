import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ChatState {
    id: string
    idToken: string
    phone: string
}

interface useChatState {
    chatList: ChatState[]
    addChat: (user: ChatState) => void
    reset: () => void
}

const initialState: Record<'chatList', ChatState[]> = {
    chatList: [],
}

export const useChatState = create<useChatState>()(
    devtools(
        immer((set, get) => ({
            ...initialState,
            addChat: (user) =>
                set((state) => {
                    state.chatList.push(user)
                }),
            reset: () =>
                set(() => {
                    initialState
                }),
        }))
    )
)
