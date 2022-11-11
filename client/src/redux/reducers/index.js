import { userReducer } from './userReducer';
import { isLoginUserReducer } from './isLoginUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ userReducer, isLoginUserReducer });

export { rootReducer };