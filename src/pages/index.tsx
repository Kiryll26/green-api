import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

interface PageType {
    path: string
    Component: React.LazyExoticComponent<() => JSX.Element>
}

const RoutesData: PageType[] = [
    { Component: React.lazy(() => import('./main')), path: '/' },
    { Component: React.lazy(() => import('./addChat')), path: '/add_chat' },
]

export const Routing = () => {
    return (
        <Routes>
            <>
                {RoutesData.map(({ path, Component }) => (
                    <Route key={`route-${path}`} path={path} element={<Component />} />
                ))}
                <Route path='*' element={<Navigate to='/' />} />
            </>
        </Routes>
    )
}
