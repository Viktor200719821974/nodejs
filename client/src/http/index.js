import axios from "axios";
import { API_MOVIES, API_MOVIES_SEARCH, APP_API_KEY } from "../constants";

export const fetchMovie = async() => {
    return await axios(API_MOVIES + APP_API_KEY);
}
export const fetchMovieSearch = async(searchText) => {
    return await axios(API_MOVIES_SEARCH + searchText + '&api_key=' + APP_API_KEY) ;
}