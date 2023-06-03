import * as React from 'react'
import styled from 'styled-components'
import { IconUser } from './IconUser'
import { useChatState, useSelectChatState } from 'entities/chat'

export const SelectChat = () => {
    const chatList = useChatState((state) => state.chatList)
    const [selectChat, actChatId] = useSelectChatState((state) => [state.selectChat, state.actChatId])

    return (
        <>
            {chatList.length
                ? chatList.map((chat) => (
                      <Wrap
                          key={new Date().getTime()}
                          onClick={() => selectChat(`${chat.phone}`)}
                          active={chat.phone === actChatId ? true : false}
                      >
                          <IconUser />
                          <NameStyled>{chat.phone.replace('@c.us', '')}</NameStyled>
                      </Wrap>
                  ))
                : null}
        </>
    )
}

interface WrapProps {
    active: boolean
}

const Wrap = styled.div<WrapProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    background-color: ${({ theme, active }) => (active ? theme.colors.green : theme.colors.dark)};
`

const NameStyled = styled.span`
    font-size: 1.2rem;
    display: block;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.txtColor};
`
