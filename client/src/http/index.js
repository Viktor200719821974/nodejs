import axios from "axios";
import { API_MOVIES, APP_API_KEY } from "../constants";

export const fetchMovie = async() => {
    return await axios(API_MOVIES + APP_API_KEY);
}