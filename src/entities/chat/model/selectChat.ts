import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface MessageType {
    from: 'you' | 'not_you'
    text: string
}

interface SelectChat {
    actChatId: string | null
    messages: {
        [key: string]: MessageType[]
    }
}

interface State extends SelectChat {
    selectChat: (actChatId: string) => void
    setMessage: (data: MessageType) => void
    reset: () => void
}

const initialState: SelectChat = {
    actChatId: null,
    messages: {},
}

export const useSelectChatState = create<State>()(
    devtools(
        immer((set, get) => ({
            ...initialState,
            selectChat: (actChatId) =>
                set((state) => {
                    state.actChatId = actChatId
                }),
            setMessage: (data) =>
                set((state) => {
                    !state.messages[state.actChatId!]
                        ? (state.messages[state.actChatId!] = [data])
                        : state.messages[state.actChatId!].push(data)
                }),
            reset: () =>
                set(() => {
                    initialState
                }),
        }))
    )
)
