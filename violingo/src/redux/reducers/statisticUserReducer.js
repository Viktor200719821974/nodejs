import { STATISTIC_USER } from '../actions';

export const statisticUserReducer = (state = { statistic: {} }, action) => {
  switch(action.type) {
    case STATISTIC_USER:
      return { ...state, statistic:{ ...action.payload } };
    default:
      return state;
  }
}