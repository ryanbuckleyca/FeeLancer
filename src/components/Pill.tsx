import React from 'react'

const Pill = ({children, bgColor, textColor}: { 
    children: string, 
    bgColor?: string, 
    textColor?: string
}) => {
    const style = {
        fontSize: '.8rem', 
        backgroundColor: bgColor || '#333',
        color: textColor || '#fff',
        borderRadius: '1rem', 
        padding: '.2rem .6rem', 
        margin: '0 .2rem .2rem 0'
    }

    return (
        <div style={style}>{children}</div>
    )
}

export default Pill
