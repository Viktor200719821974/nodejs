import { ARRAY_CHOOSE_GENRES, FETCH_GENRES, FETCH_MOVIES, IS_LOGIN_USER } from "./actionTypes"

export const fetchMoviesRedux = (data) => {
    return { type: FETCH_MOVIES, payload: data }
};
export const fetchGenresRedux = (data) => {
    return { type: FETCH_GENRES, payload: data }
};
export const isLoginRedux = (data) => {
    return { type:  IS_LOGIN_USER, payload: data }
};
export const arrayChooseGenresRedux = (data) => {
    return { type:  ARRAY_CHOOSE_GENRES, payload: data }
};