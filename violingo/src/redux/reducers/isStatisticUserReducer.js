import { IS_STATISTIC_USER } from '../actions';

export const isStatisticUserReducer = (state = { isStatistic: false }, action) => {
  switch(action.type) {
    case IS_STATISTIC_USER:
      return { ...state, isStatistic: action.payload };
    default:
      return state;
  }
}