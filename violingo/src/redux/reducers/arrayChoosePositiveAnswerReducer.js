import { ARRAY_CHOOSE_POSITIVE_ANSWER } from '../actions';

export const arrayChoosePositiveAnswerReducer = (state = { array: [] }, action) => {
    switch(action.type) {
      case ARRAY_CHOOSE_POSITIVE_ANSWER:
        return {...state, array: [...action.payload]};
      default:
        return state;
    }
}