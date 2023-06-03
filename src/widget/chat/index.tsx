import * as React from 'react'
import styled, { css } from 'styled-components'

import { Form } from './ui'
import { useSelectChatState } from 'entities/chat'
import bg from './img/bg.png'

export const Chat = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [actChatId, messages] = useSelectChatState((state) => [state.actChatId, state.messages])

    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current!.scrollHeight
        }
    }, [messages])

    return (
        <>
            {actChatId ? (
                <ChatStyled>
                    <Bg />
                    <Scroll ref={ref}>
                        <MessagesStyled>
                            {messages[actChatId] &&
                                messages[actChatId].length &&
                                messages[actChatId].map((message) => (
                                    <MessageStyled message={message.from} key={new Date().getTime()}>
                                        <span>{message.text}</span>
                                    </MessageStyled>
                                ))}
                        </MessagesStyled>
                    </Scroll>
                    <WrapForm>
                        <Form />
                    </WrapForm>
                </ChatStyled>
            ) : null}
        </>
    )
}

interface MessageProps {
    message: 'you' | 'not_you'
}

const MessageStyled = styled.div<MessageProps>`
    padding: 5px;
    margin: 4px 0;
    max-width: 40%;
    border-radius: 5px;
    ${({ message, theme }) => {
        switch (message) {
            case 'you':
                return css`
                    align-self: flex-end;
                    text-align: right;
                    background-color: ${theme.colors.green};
                `
            case 'not_you':
                return css`
                    align-self: flex-start;
                    text-align: left;
                    background-color: ${theme.colors.green};
                `
        }
    }}
`

const ChatStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    position: relative;
`

const MessagesStyled = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 70px);
    flex-direction: column;
    justify-content: end;
    background-color: transparent;
    padding: 10px;
`

const Scroll = styled.div`
    overflow: auto;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: transparent;
`

const WrapForm = styled.div`
    height: 70px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.dark};
`

export const Bg = styled.div`
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: repeat;
    position: absolute;
    opacity: 0.06;
    pointer-events: none;
`
