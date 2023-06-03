import * as React from 'react'
import * as S from './styled'

interface CommonProps {
    children: React.ReactNode
    className?: string
}

export const Layout = ({ children }: CommonProps) => <S.Layout>{children}</S.Layout>

const Aside = ({ children }: CommonProps) => <S.Aside>{children}</S.Aside>
const Sticky = ({ children }: CommonProps) => <S.Sticky>{children}</S.Sticky>
const Content = ({ children }: CommonProps) => <S.Content>{children}</S.Content>

Layout.Aside = Aside
Layout.Content = Content
Layout.Sticky = Sticky
