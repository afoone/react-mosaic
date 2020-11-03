import componentsActionTypes from '../componentsActionTypes'
import initialState from '../initialState'

const componentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case componentsActionTypes.ADD_COMPONENT:
            return { ...state, components: [...state.components, action.payload] }
        case componentsActionTypes.REMOVE_COMPONENT:
            return { ...state, components: state.components.filter(i => i.id !== action.payload) }
        case componentsActionTypes.UPDATE_COMPONENTS:
            return { ...state, components: action.payload, firstRound: false }
        case componentsActionTypes.MAKE_FIRST_ROUND:
            return { ...state, firstRound: false }
        default:
            return state;
    }
}

export default componentsReducer