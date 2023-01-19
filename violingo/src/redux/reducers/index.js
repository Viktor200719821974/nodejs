import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { isLoginUserReducer } from './isLoginUserReducer';
import { statisticUserReducer } from './statisticUserReducer';

const rootReducer = combineReducers({ userReducer, isLoginUserReducer, statisticUserReducer });

export { rootReducer };