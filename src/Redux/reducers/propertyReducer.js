import {
    SET_MODAL_OPEN,
} from '../actions/propertyAction';

export function propertyReducer(state = {
    modalOpen: false
}, action) {
    switch (action.type) {
        case SET_MODAL_OPEN:
            return { ...state, modalOpen: action.payload }
        default:
            return { ...state }
    }
}