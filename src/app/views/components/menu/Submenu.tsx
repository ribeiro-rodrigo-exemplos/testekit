import React, { ReactNode, useState } from 'react'

interface SubmenuProps{
    title: string, 
    expanded?: boolean
    children: ReactNode
}

export default ({ title, children, expanded }: SubmenuProps) => {

    const [ex, changeExpand] = useState(expanded)

    console.log(ex)

    return (
        <li className="active">
            <a href={`${title}Submenu`} data-toggle="collapse" aria-expanded={ex} 
            className={`dropdown-toggle ${!ex ? 'collapssed' : ''}`} onClick={() => changeExpand(!ex)} >{ title }</a>
            <ul className={`list-unstyled collapse ${ex ? 'show' : ''}`} id={`${title}Submenu`}>
                { children }
            </ul>
        </li>
    )
}