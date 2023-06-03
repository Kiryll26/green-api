import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'shared/ui/button'
import { Layout } from 'shared/ui/layout'
import { SelectChat } from 'features/chat'
import { Chat } from 'widget/chat'

const Main = () => {
    return (
        <Layout>
            <Layout.Aside>
                <Layout.Sticky>
                    <TopAside>
                        <Button render={Link} to={'/add_chat'}>
                            Добавить чат
                        </Button>
                    </TopAside>
                    <ChatList>
                        <SelectChat />
                    </ChatList>
                </Layout.Sticky>
            </Layout.Aside>
            <Layout.Content>
                <Chat />
            </Layout.Content>
        </Layout>
    )
}

const TopAside = styled.div`
    padding: 20px;
`

const ChatList = styled.div`
    padding: 0 0 20px;
    overflow-x: hidden;
    overflow: auto;
`

export default Main
