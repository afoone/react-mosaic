import React from 'react'
import componentTypes from './componentTypes'



const ComponentFactory = ({ type, configuration, layout }) => {
    const SpecificComponent = componentTypes[type];
    return (
        <SpecificComponent  {...configuration} data-grid={layout} />
    )
}

export default ComponentFactory
