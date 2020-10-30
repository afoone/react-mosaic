import React from 'react'

const TextComponent = ({ text = "Falta el texto" }) => {
    return (
        <div className="text-component">
            <div data-testid="text">{text}</div>
        </div>
    )
}

export default TextComponent
