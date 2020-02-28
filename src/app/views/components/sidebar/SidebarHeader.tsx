import React from 'react'

interface SidebarHeaderProps{
    title: string 
}

export default ({ title }: SidebarHeaderProps) => (
    <div className="sidebar-header">
        <h3>{ title }</h3>
    </div>
)