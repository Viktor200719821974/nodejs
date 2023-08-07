import { VALUE_SUCCESS_FOR_ACTIVE_BUTTON } from '../actions/actionTypes';

export const valueSuccessForActiveButtonReducer = (state = { valueSuccess : 0 }, action) => {
    switch(action.type) {
        case VALUE_SUCCESS_FOR_ACTIVE_BUTTON:
            return {...state,   valueSuccess : action.payload };
        default:
            return state;
    }
}