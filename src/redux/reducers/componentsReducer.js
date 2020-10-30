import componentsActions from '../componentsActions'
import initialState from '../initialState'

const componentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case componentsActions.ADD_COMPONENT:
            return { ...state, components: [...state.components, action.payload] }
        case componentsActions.REMOVE_COMPONENT:
            return { ...state, components: state.components.filter(i => i.key !== action.payload) }
        default:
            return state;
    }
}

export default componentsReducer