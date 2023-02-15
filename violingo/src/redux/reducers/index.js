import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { isLoginUserReducer } from './isLoginUserReducer';
import { statisticUserReducer } from './statisticUserReducer';
import { isStatisticUserReducer } from './isStatisticUserReducer';
import { arrayChoosePositiveAnswerReducer } from './arrayChoosePositiveAnswerReducer';
import { arrayIdChoosePositiveAnswerReducer } from './arrayIdChoosePositiveAnswerReducer';

const rootReducer = combineReducers({ 
    userReducer, isLoginUserReducer, statisticUserReducer, isStatisticUserReducer, 
    arrayChoosePositiveAnswerReducer, arrayIdChoosePositiveAnswerReducer,
});

export { rootReducer };