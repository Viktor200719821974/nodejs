import axios from "axios";
import { API_MOVIES, API_MOVIES_SEARCH, APP_API_KEY } from "../constants";

export const fetchMovie = async(page) => {
    return await axios(API_MOVIES + APP_API_KEY + `&page=${page}`);
}
export const fetchMovieSearch = async(searchText, page) => {
    return await axios(API_MOVIES_SEARCH + searchText + `&page=${page}&api_key=${APP_API_KEY}` ) ;
}