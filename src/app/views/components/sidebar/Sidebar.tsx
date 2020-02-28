import React, { ReactNode } from 'react'

interface SidebarProps{
    children: ReactNode
}

export default ({ children }: SidebarProps) => (
    <nav id="sidebar">
        { children }
    </nav>
)