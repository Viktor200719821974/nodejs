import { 
    FETCH_USER, IS_LOGIN_USER, NO_USER, STATISTIC_USER, IS_STATISTIC_USER, ARRAY_WRONG_ANSWER, IS_END_MODULE,
    ARRAY_CHOOSE_POSITIVE_ANSWER, ARRAY_ID_CHOOSE_POSITIVE_ANSWER, IS_ADMIN_USER, FETCH_ALL_TASKS_WITHOUT_FILTERS,
    ARRAY_CHOOSE_POSITIVE_ANSWER_EMPTY, ARRAY_ID_CHOOSE_POSITIVE_ANSWER_EMPTY, FETCH_TASKS, AGENDA_USER, ARRAY_THEMES,
    ARRAY_LESSONS, ARRAY_MODULES,
} from './index';

export const fetchUser = (data) => {
    return { type: FETCH_USER, payload: data };
}
export const noUser = () => {
    return { type: NO_USER }
}
export const isLoginUser = (data) => {
    return { type: IS_LOGIN_USER, payload: data };
}
export const fetchTasks = (data) => {
    return { type: FETCH_TASKS, payload: data };
}
export const fetchAllTasksWithoutFilters = (data) => {
    return { type: FETCH_ALL_TASKS_WITHOUT_FILTERS, payload: data };
}
export const isAdminUser = (data) => {
    return { type: IS_ADMIN_USER, payload: data };
}
export const statisticUser = (data) => {
    return { type: STATISTIC_USER, payload: data };
}
export const isStatisticUser = (data) => {
    return { type: IS_STATISTIC_USER , payload: data };
}
export const arrayChoosePositiveAnswer = (data) => {
    return { type: ARRAY_CHOOSE_POSITIVE_ANSWER , payload: data };
}
export const arrayIdChoosePositiveAnswer = (data) => {
    return { type: ARRAY_ID_CHOOSE_POSITIVE_ANSWER , payload: data };
}
export const arrayChoosePositiveAnswerEmpty = () => {
    return { type: ARRAY_CHOOSE_POSITIVE_ANSWER_EMPTY }
}
export const arrayIdChoosePositiveAnswerEmpty = () => {
    return { type: ARRAY_ID_CHOOSE_POSITIVE_ANSWER_EMPTY }
}
export const arrayWrongAnswer = (data) => {
    return { type: ARRAY_WRONG_ANSWER , payload: data };
}
export const agendaUser = (data) => {
    return { type: AGENDA_USER, payload: data };
}
export const isEndModuleActions = (data) => {
    return { type: IS_END_MODULE, payload: data };
}
export const arrayThemes = (data) => {
    return { type: ARRAY_THEMES, payload: data };
}
export const arrayLessons = (data) => {
    return { type: ARRAY_LESSONS, payload: data };
}
export const arrayModules = (data) => {
    return { type: ARRAY_MODULES, payload: data };
}