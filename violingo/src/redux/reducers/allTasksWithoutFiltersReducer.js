import { FETCH_ALL_TASKS_WITHOUT_FILTERS } from '../actions';

export const allTasksWithoutFiltersReducer = (state = { allTasks: []}, action) => {
    switch(action.type) {
        case FETCH_ALL_TASKS_WITHOUT_FILTERS:
            return {...state, allTasks: [...action.payload]};
        default:
            return state;
    }
}