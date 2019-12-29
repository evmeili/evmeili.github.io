import { createStore } from 'redux'
const counter = (state = {
    nameTex: ''
}, action) => {
    switch (action.tyoe) {
        case 'username':
            return {
                ...state,
                nameTex: action.nameTex
            }
        default:
            return state
    }
}
const store = createStore(counter)
export default store