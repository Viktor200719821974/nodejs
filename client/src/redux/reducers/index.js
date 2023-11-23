import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { genresReducer } from "./genresReducer";
import { isLoginReducer } from "./isLoginReducer";

const rootReducer = combineReducers({ moviesReducer, genresReducer, isLoginReducer, });

export { rootReducer };