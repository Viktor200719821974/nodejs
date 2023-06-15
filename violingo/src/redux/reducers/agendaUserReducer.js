import { AGENDA_USER } from '../actions';

export const agendaUserReducer = (state = { agenda: {}}, action) => {
    switch(action.type) {
        case AGENDA_USER:
            return {...state, agenda: {...action.payload }};
        default:
            return state;
    }
}