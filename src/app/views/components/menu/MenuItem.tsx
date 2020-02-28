import React from 'react'

interface MenuItemProps{
    title: string 
}

export default ({ title }: MenuItemProps) => (
    <li>
        <a href="#teste">{ title }</a>
    </li>
)