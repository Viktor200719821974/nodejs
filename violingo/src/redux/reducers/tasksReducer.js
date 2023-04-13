import { FETCH_TASKS } from '../actions';

export const tasksReducer = (state = {tasks: []}, action) => {
    switch(action.type) {
        case FETCH_TASKS:
            return {...state, tasks: [...action.payload]};
        default:
            return state;
    }
}