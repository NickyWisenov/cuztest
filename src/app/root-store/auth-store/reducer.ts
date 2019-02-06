import { Actions, ActionTypes } from './actions';
import { State, initialState } from './state';

export function authReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        default: 
            return state;
    }
}