import { ARRAY_WRONG_ANSWER } from '../actions';

export const arrayWrongAnswerReducer = (state = { arrayWrongs: [] }, action) => {
    switch(action.type) {
      case ARRAY_WRONG_ANSWER:
        return {...state, arrayWrongs: [...action.payload]};
      default:
        return state;
    }
}