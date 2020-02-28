import React from 'react'

interface PageTitleProps{
    title: string
}

export default ({ title }: PageTitleProps) => (
    <h2 className="title">{ title }</h2>
)