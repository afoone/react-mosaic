import React from 'react'
import { WidthProvider, Responsive } from 'react-grid-layout'
import ComponentFactory from './customcomponents/factory/ComponentFactory';
import { v4 as uuid } from 'uuid'
import './Grid.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateComponents, addComponent, makeFirstRound } from '../redux/actions/componentsActions'


const GridLayout = WidthProvider(Responsive);


const Grid = () => {

    const components = useSelector(state => state.components)
    const firstRound = useSelector(state => state.firstRound)
    const dispatch = useDispatch()

    const updateLayout = (layout) => {
        if (!firstRound) {
            dispatch(
                updateComponents(
                    components.map(c => {
                        return { ...c, layout: layout.filter(i => layout.i === i.id)[0] }
                    })
                )
            )
        } else {
            dispatch(
                makeFirstRound()
            )
        }
    }


    const onAddComponent = () => {

        dispatch(
            addComponent({
                id: uuid(),
                type: "title",
                configuration: { text: "Un componente nuevo de trinqui" },
                layout: { x: components.length * 2 % 12, y: Infinity, w: 1, h: 2 },
            })
        )

    }

    return (
        <>
            <button onClick={onAddComponent}>Añadir componente</button>
            <GridLayout className="layout" cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} rowHeight={120} onLayoutChange={layout => updateLayout(layout)} >
                {
                    components.map(c => {
                        return <div key={c.id} data-grid={c.layout}><ComponentFactory  {...c} /></div>
                    }
                    )
                }
            </GridLayout>
        </>
    )
}

export default Grid
