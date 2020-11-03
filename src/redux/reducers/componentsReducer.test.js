import reducer from './componentsReducer'
import types from '../componentsActionTypes'
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
                    id: "kdljsflkdjs",
                    type: "title",
                    configuration: { text: "Un título configurado" },
                    layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                }
            })
        ).toEqual({
            ...initialState, components: [...initialState.components, {
                id: "kdljsflkdjs",
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
                        id: "1",
                        type: "title",
                        configuration: { text: "Un título configurado" },
                        layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                    },
                    {
                        id: "2",
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
                id: "2",
                type: "title",
                configuration: { text: "Un título configurado" },
                layout: { x: 0, y: 0, w: 1, h: 2, static: true },
            }]
        })
    })


    test('should handle UPDATE COMPONENTS', () => {
        expect(
            reducer({
                ...initialState, components: [
                    {
                        id: "1",
                        type: "title",
                        configuration: { text: "Un título configurado" },
                        layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                    },
                    {
                        id: "2",
                        type: "title",
                        configuration: { text: "Un título configurado" },
                        layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                    }
                ]
            }, {
                type: types.UPDATE_COMPONENTS,
                payload: [{
                    id: "3",
                    type: "title",
                    configuration: { text: "Un título R" },
                    layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                },
                {
                    id: "4",
                    type: "title",
                    configuration: { text: "Un título configurado" },
                    layout: { x: 0, y: 0, w: 1, h: 2, static: true },
                }]
            })
        ).toEqual({
            ...initialState, components: [{
                id: "3",
                type: "title",
                configuration: { text: "Un título R" },
                layout: { x: 0, y: 0, w: 1, h: 2, static: true },
            },
            {
                id: "4",
                type: "title",
                configuration: { text: "Un título configurado" },
                layout: { x: 0, y: 0, w: 1, h: 2, static: true },
            }],
            firstRound: false
        })
    })

    test("debe cambiar el estado de first round", () => {
        expect(reducer(
            { firstRound: true },
            {
                type: types.MAKE_FIRST_ROUND
            }
        )).toEqual(
            { firstRound: false }
        )
    })



})