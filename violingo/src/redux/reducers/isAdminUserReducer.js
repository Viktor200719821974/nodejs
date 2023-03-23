import {IS_ADMIN_USER} from "../actions";

export const isAdminUserReducer = (state = { isAdmin: false }, action) => {
    switch(action.type) {
        case IS_ADMIN_USER:
            return {...state, isAdmin: action.payload};
        default:
            return state;
    }
}