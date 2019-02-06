import { Action } from '@ngrx/store';

export enum ActionTypes {
    SET_EMAIL = '[Auth Action] SET EMAIL'
}

export class SET_EMAIL implements Action {
    readonly type = ActionTypes.SET_EMAIL;

    constructor(public payload: {email: string}) {}
}

export type Actions = SET_EMAIL;