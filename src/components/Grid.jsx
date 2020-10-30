import React, { useState } from 'react'
import { WidthProvider, Responsive } from 'react-grid-layout'
import ComponentFactory from './customcomponents/factory/ComponentFactory';
import { v4 as uuid } from 'uuid'

import './Grid.css'
const GridLayout = WidthProvider(Responsive);

const Grid = () => {

    const initialComponents = [
        {
            type: "title",
            configuration: { text: "Un título configurado" },
            layout: { x: 0, y: 0, w: 1, h: 2, static: true },
        },
        {
            type: "text",
            configuration: { text: "Un texto configurado" },
            layout: { x: 0, y: 0, w: 3, h: 2 },
        },
        {
            type: "patient",
            configuration: { text: "Otra cosa mariposa" },
            layout: { x: 4, y: 0, w: 1, h: 2 },
        }
    ]

    const [components, setComponents] = useState(initialComponents)

    const [componentCounter, setComponentCounter] = useState(initialComponents.length)


    const onAddComponent = () => {
        setComponents([...components, {
            type: "title",
            configuration: { text: "Un componente nuevo de trinqui" },
            layout: { x: components.length * 2 % 12, y: Infinity, w: 1, h: 2 },
        },])
        setComponentCounter(componentCounter + 1)
    }



    return (
        <>
            <button onClick={onAddComponent}>Añadir componente</button>
            <GridLayout className="layout" cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} rowHeight={120} >
                {
                    components.map(c => {
                        const properties = { ...c, id: uuid() }
                        return <div key={properties.id} data-grid={c.layout}><ComponentFactory  {...c} /></div>
                    }
                    )
                }
            </GridLayout>
        </>
    )
}

export default Grid
