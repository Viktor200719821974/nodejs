import axios from "axios";
import { API_MOVIES, API_MOVIES_GENRES, API_MOVIES_SEARCH, APP_API_KEY, } from "../constants";

export const fetchMovies = async(page) => {
    return await axios(API_MOVIES + APP_API_KEY + `&page=${page}`);
};
export const fetchMoviesSearch = async(searchText, page) => {
    return await axios(API_MOVIES_SEARCH + searchText + `&page=${page}&api_key=${APP_API_KEY}` ) ;
};
export const fetchGenres = async () => {
    return await axios(API_MOVIES_GENRES + 'movie/list?api_key=' + APP_API_KEY);
};