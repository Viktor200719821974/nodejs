import { combineReducers } from "redux";

import { moviesReducer } from "./moviesReducer";
import { genresReducer } from "./genresReducer";
import { isLoginReducer } from "./isLoginReducer";
import { arrayChooseGenresReducer } from "./arrayChooseGenresReducer";

const rootReducer = combineReducers({ moviesReducer, genresReducer, isLoginReducer, arrayChooseGenresReducer, });

export { rootReducer };