import React from 'react'

const PatientDataComponent = ({ text = "Falta el texto" }) => {
    return (
        <div className="text-component">
            <h1>{text}</h1>
        </div>
    )
}

export default PatientDataComponent
