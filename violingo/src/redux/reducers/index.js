import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { isLoginUserReducer } from './isLoginUserReducer';
import { statisticUserReducer } from './statisticUserReducer';
import { isStatisticUserReducer } from './isStatisticUserReducer';
import { arrayChoosePositiveAnswerReducer } from './arrayChoosePositiveAnswerReducer';
import { arrayIdChoosePositiveAnswerReducer } from './arrayIdChoosePositiveAnswerReducer';
import { arrayWrongAnswerReducer } from './arrayWrongAnswerReducer';
import { isAdminUserReducer } from './isAdminUserReducer';
import { tasksReducer } from './tasksReducer';
import { allTasksWithoutFiltersReducer } from './allTasksWithoutFiltersReducer';
import { agendaUserReducer } from './agendaUserReducer';
import { isEndModuleReducer } from './isEndModuleReducer';
import { arrayThemesReducer } from './arrayThemesReducer';
import { arrayLessonsReducer } from './arrayLessonsReducer';
import { arrayModulesReducer } from './arrayModulesReducer';

const rootReducer = combineReducers({ 
    userReducer, isLoginUserReducer, statisticUserReducer, isStatisticUserReducer, 
    arrayChoosePositiveAnswerReducer, arrayIdChoosePositiveAnswerReducer, 
    arrayWrongAnswerReducer, isAdminUserReducer, tasksReducer, allTasksWithoutFiltersReducer, 
    agendaUserReducer, isEndModuleReducer, arrayThemesReducer, arrayLessonsReducer, arrayModulesReducer,
});

export { rootReducer };