import componentsReducer from './reducers/componentsReducer'
import { createStore } from 'redux'
import initialState from './initialState'


const store = createStore(componentsReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;