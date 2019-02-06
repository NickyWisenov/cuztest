import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function commonReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.WATCH_INTRO:
            return {
                ...state,
                isWatch: true
            };
        case ActionTypes.CLOSE_INTRO:
            return {
                ...state,
                isWatch: false
            };
        default: {
            return state;
        }
    }
}