import { FETCH_USER, ISLOGIN_USER, NO_USER, STATISTIC_USER } from './index';

export const fetchUser = (data) => {
    return { type: FETCH_USER, payload: data };
}
export const noUser = () => {
    return { type: NO_USER }
}
export const isLoginUser = (data) => {
    return { type: ISLOGIN_USER, payload: data };
}
export const statisticUser = (data) => {
    return { type: STATISTIC_USER, payload: data };
}