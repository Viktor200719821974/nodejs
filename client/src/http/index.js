import axios from "axios";
import { LOCALHOST_BASIC_API } from "../constants";

const $host = axios.create({
    baseURL: LOCALHOST_BASIC_API
});

export {
    $host,
};