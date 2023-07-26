import { ARRAY_MODULES } from '../actions/actionTypes';

export const arrayModulesReducer = (state = {modules: []}, action) => {
    switch(action.type) {
        case ARRAY_MODULES:
            return {...state, modules: [...action.payload]};
        default:
            return state;
    }
}