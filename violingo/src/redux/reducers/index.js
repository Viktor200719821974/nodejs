import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { isLoginUserReducer } from './isLoginUserReducer';
import { statisticUserReducer } from './statisticUserReducer';
import { isStatisticUserReducer } from './isStatisticUserReducer';
import { arrayChoosePositiveAnswerReducer } from './arrayChoosePositiveAnswerReducer';
import { arrayIdChoosePositiveAnswerReducer } from './arrayIdChoosePositiveAnswerReducer';
import { arrayWrongAnswerReducer } from './arrayWrongAnswerReducer';
import { isAdminUserReducer } from './isAdminUserReducer';

const rootReducer = combineReducers({ 
    userReducer, isLoginUserReducer, statisticUserReducer, isStatisticUserReducer, 
    arrayChoosePositiveAnswerReducer, arrayIdChoosePositiveAnswerReducer, 
    arrayWrongAnswerReducer, isAdminUserReducer,
});

export { rootReducer };