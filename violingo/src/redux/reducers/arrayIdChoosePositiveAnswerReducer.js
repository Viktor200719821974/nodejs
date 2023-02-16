import { ARRAY_ID_CHOOSE_POSITIVE_ANSWER, ARRAY_ID_CHOOSE_POSITIVE_ANSWER_EMPTY } from '../actions';

export const arrayIdChoosePositiveAnswerReducer = (state = { arrayId: [] }, action) => {
    switch(action.type) {
      case ARRAY_ID_CHOOSE_POSITIVE_ANSWER:
        return {...state, arrayId: [...action.payload]};
      case ARRAY_ID_CHOOSE_POSITIVE_ANSWER_EMPTY:
        return {...state, arrayId: [] };
      default:
        return state;
    }
}