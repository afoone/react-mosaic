import React from 'react'
import { WidthProvider, Responsive } from 'react-grid-layout'
import ComponentFactory from './customcomponents/factory/ComponentFactory';
import { v4 as uuid } from 'uuid'

import './Grid.css'
const GridLayout = WidthProvider(Responsive);

const Grid = () => {


    const components = [
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

    return (
        <GridLayout className="layout" cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} rowHeight={120} >
            {
                components.map(c => {
                    const properties = { ...c, id: uuid() }
                    return <div key={properties.id} data-grid={c.layout}><ComponentFactory  {...c} /></div>
                }
                )
            }
        </GridLayout>
    )
}

export default Grid
