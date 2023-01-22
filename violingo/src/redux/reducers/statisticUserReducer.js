import { STATISTIC_USER } from '../actions';

export const statisticUserReducer = (state = { isStatistic: false }, action) => {
  switch(action.type) {
    case STATISTIC_USER:
      return { ...state, isStatistic: action.payload };
    default:
      return state;
  }
}