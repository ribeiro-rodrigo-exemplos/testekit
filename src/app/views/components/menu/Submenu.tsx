import React, { ReactNode, useState } from 'react'

interface SubmenuProps{
    title: string, 
    expanded?: boolean
    children: ReactNode
}

export default ({ title, children, expanded }: SubmenuProps) => {

    const [isExpanded, changeExpand] = useState(expanded)

    return (
        <li className="active">
            <a href={`${title}Submenu`} data-toggle="collapse" aria-expanded={isExpanded} 
            className={`dropdown-toggle ${!isExpanded ? 'collapssed' : ''}`} onClick={() => changeExpand(!isExpanded)} >{ title }</a>
            <ul className={`list-unstyled collapse ${isExpanded ? 'show' : ''}`} id={`${title}Submenu`}>
                { children }
            </ul>
        </li>
    )
}