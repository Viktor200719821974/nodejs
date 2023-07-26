import { ARRAY_THEMES } from '../actions/actionTypes';

export const arrayThemesReducer = (state = {themes: []}, action) => {
    switch(action.type) {
        case ARRAY_THEMES:
            return {...state, themes: [...action.payload]};
        default:
            return state;
    }
}