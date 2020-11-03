import { v4 as uuid } from 'uuid'

const initialState = {
    components: [
        {
            id: uuid(),
            type: "title",
            configuration: { text: "Un título configurado" },
            layout: { x: 0, y: 0, w: 1, h: 2, static: true },
        },
        {
            id: uuid(),
            type: "text",
            configuration: { text: "Un texto configurado" },
            layout: { x: 0, y: 0, w: 3, h: 2 },
        },
        {
            id: uuid(),
            type: "patient",
            configuration: { text: "Otra cosa mariposa" },
            layout: { x: 4, y: 0, w: 1, h: 2 },
        }
    ],
    firstRound: true
}

export default initialState