import React, { ReactNode } from 'react'

interface MenuProps{
    title: string 
    children: React.ReactNode
}

export default ( {title, children}: MenuProps ) => (
    <ul className="list-unstyled components">
        <p>{ title }</p>
        { children }
    </ul>
)