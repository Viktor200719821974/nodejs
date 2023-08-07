import { POINTS_USER_FOR_DAY } from '../actions';

export const pointsUserForDayReducer = (state = { points : 0 }, action) => {
    switch(action.type) {
        case POINTS_USER_FOR_DAY:
            return {...state,   points : action.payload };
        default:
            return state;
    }
}