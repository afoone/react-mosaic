import componentsActionTypes from '../componentsActionTypes'

export const updateComponents = components => {
    return {
        type: componentsActionTypes.UPDATE_COMPONENTS,
        payload: components
    }
}

export const addComponent = component => {
    return {
        type: componentsActionTypes.ADD_COMPONENT,
        payload: component
    }
}

export const makeFirstRound = () => {
    return {
        type: componentsActionTypes.MAKE_FIRST_ROUND,
    }
}