import { FETCH_GENRES, FETCH_MOVIES } from "./actionTypes"

export const fetchMoviesRedux = (data) => {
    return { type: FETCH_MOVIES, payload: data }
};
export const fetchGenresRedux = (data) => {
    return { type: FETCH_GENRES, payload: data }
};