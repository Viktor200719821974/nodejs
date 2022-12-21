import { ISLOGIN_USER } from '../actions';

export const isLoginUserReducer = (state = { isLogin: false }, action) => {
    switch(action.type) {
        case ISLOGIN_USER:
            return {...state, isLogin: action.payload};
        default:
            return state;
    }
}