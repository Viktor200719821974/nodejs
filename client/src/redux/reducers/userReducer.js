import { FETCH_USER, NO_USER } from '../actions';

export const userReducer = (state = { user: {} }, action) => {
    switch(action.type) {
      case FETCH_USER:
        return {...state, user: {...action.payload}};
      case NO_USER:
        return {...state, user: {} };
      default:
        return state;
    }
  }
