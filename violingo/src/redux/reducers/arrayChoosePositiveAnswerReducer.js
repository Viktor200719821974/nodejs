import { ARRAY_CHOOSE_POSITIVE_ANSWER, ARRAY_CHOOSE_POSITIVE_ANSWER_EMPTY } from '../actions';

export const arrayChoosePositiveAnswerReducer = (state = { array: [] }, action) => {
    switch(action.type) {
      case ARRAY_CHOOSE_POSITIVE_ANSWER:
        return {...state, array: [...action.payload]};
      case ARRAY_CHOOSE_POSITIVE_ANSWER_EMPTY:
        return {...state, array: [] };
      default:
        return state;
    }
}