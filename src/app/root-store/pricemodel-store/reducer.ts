import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function pricemodelReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.INIT_JOB_TYPE:
            return {
                ...state,
                job_type: action.payload.job_type
            };
        case ActionTypes.SET_FROM_LANG:
            return {
                ...state,
                from_language: action.payload.from_language
            }
        case ActionTypes.SET_TO_LANG:
            return {
                ...state,
                to_languaage: action.payload.to_language
            }
        case ActionTypes.SET_NATURE:
            return {
                ...state,
                nature: action.payload.nature
            }
        case ActionTypes.SET_START_DATE:
            return {
                ...state,
                start_date: action.payload.start_date
            }
        case ActionTypes.SET_END_DATE:
            return {
                ...state,
                end_date: action.payload.end_date
            }
        case ActionTypes.SET_LAO_PROJECT:
            return {
                ...state,
                is_lao_project: action.payload.is_lao_project
            }
        default: {
            return state;
        }
    }
}