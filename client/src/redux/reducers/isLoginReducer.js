import { IS_LOGIN_USER } from "../actions/actionTypes";

export const isLoginReducer = ( state = { isLogin: false }, action) => {
    switch(action.type) {
        case IS_LOGIN_USER:
            return { ...state, isLogin: action.payload };
        default:
            return state;
    }
};