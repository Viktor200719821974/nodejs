import { 
    FETCH_USER, ISLOGIN_USER, NO_USER, STATISTIC_USER, IS_STATISTIC_USER, 
    ARRAY_CHOOSE_POSITIVE_ANSWER, ARRAY_ID_CHOOSE_POSITIVE_ANSWER, 
    ARRAY_CHOOSE_POSITIVE_ANSWER_EMPTY, ARRAY_ID_CHOOSE_POSITIVE_ANSWER_EMPTY,
} from './index';

export const fetchUser = (data) => {
    return { type: FETCH_USER, payload: data };
}
export const noUser = () => {
    return { type: NO_USER }
}
export const isLoginUser = (data) => {
    return { type: ISLOGIN_USER, payload: data };
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