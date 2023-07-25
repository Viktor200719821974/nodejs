import { IS_END_MODULE } from '../actions';

export const isEndModuleReducer = (state = { isEndModule: false }, action) => {
    switch(action.type) {
        case IS_END_MODULE:
            return {...state, isEndModule: action.payload};
        default:
            return state;
    }
}