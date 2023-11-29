import { ARRAY_CHOOSE_GENRES } from "../actions/actionTypes";

export const arrayChooseGenresReducer = ( state = { arrayChooseGenres: [] }, action) => {
    switch(action.type) {
        case ARRAY_CHOOSE_GENRES:
            return { ...state, genres: [action.payload] };
        default:
            return state;
    }
};