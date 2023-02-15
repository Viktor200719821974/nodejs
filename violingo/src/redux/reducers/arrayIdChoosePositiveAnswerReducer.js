import { ARRAY_ID_CHOOSE_POSITIVE_ANSWER } from '../actions';

export const arrayIdChoosePositiveAnswerReducer = (state = { arrayId: [] }, action) => {
    switch(action.type) {
      case ARRAY_ID_CHOOSE_POSITIVE_ANSWER:
        return {...state, arrayId: [...action.payload]};
      default:
        return state;
    }
}