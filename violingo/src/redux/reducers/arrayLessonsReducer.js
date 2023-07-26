import { ARRAY_LESSONS } from '../actions/actionTypes';

export const arrayLessonsReducer = (state = {lessons: []}, action) => {
    switch(action.type) {
        case ARRAY_LESSONS:
            return {...state, lessons: [...action.payload]};
        default:
            return state;
    }
}