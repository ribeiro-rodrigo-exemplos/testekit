import React from 'react'
import { Link } from 'react-router-dom'

interface MenuItemProps{
    title: string
    routePath: string 
}

export default ({ title, routePath }: MenuItemProps) => (
    <li>
        <Link to={ routePath }>{ title }</Link>
    </li>
)