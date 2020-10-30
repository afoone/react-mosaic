import reducer from './componentsReducer'
import types from '../componentsActions'
import initialState from '../initialState'

describe('components reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, initialState)).toEqual(initialState)
    })

    test('should handle ADD_COMPONENT', () => {
        expect(
            reducer(initialState, {
                type: types.ADD_COMPONENT,
                payload: {
                    key: "kdljsflkdjs",
                    type: "title",
                    configuration: { text: "Un título configurado" },
                    layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                }
            })
        ).toEqual({
            ...initialState, components: [{
                key: "kdljsflkdjs",
                type: "title",
                configuration: { text: "Un título configurado" },
                layout: { x: 0, y: 0, w: 1, h: 2, static: true },
            }]
        })
    })

    test('should handle REMOVE COMPONENT', () => {
        expect(
            reducer({
                ...initialState, components: [
                    {
                        key: "1",
                        type: "title",
                        configuration: { text: "Un título configurado" },
                        layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                    },
                    {
                        key: "2",
                        type: "title",
                        configuration: { text: "Un título configurado" },
                        layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                    }
                ]
            }, {
                type: types.REMOVE_COMPONENT,
                payload: "1"
            })
        ).toEqual({
            ...initialState, components: [{
                key: "2",
                type: "title",
                configuration: { text: "Un título configurado" },
                layout: { x: 0, y: 0, w: 1, h: 2, static: true },
            }]
        })
    })



})