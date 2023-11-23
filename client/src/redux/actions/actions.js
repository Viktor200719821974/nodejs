import { FETCH_GENRES, FETCH_MOVIES, IS_LOGIN_USER } from "./actionTypes"

export const fetchMoviesRedux = (data) => {
    return { type: FETCH_MOVIES, payload: data }
};
export const fetchGenresRedux = (data) => {
    return { type: FETCH_GENRES, payload: data }
};
export const isLoginRedux = (data) => {
    return { type:  IS_LOGIN_USER, payload: data }
};