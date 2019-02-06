import { Action } from '@ngrx/store';

export enum ActionTypes {
    WATCH_INTRO = '[Common Action] WATCH INTRO',
    CLOSE_INTRO = '[Common Action] CLOSE INTRO',
}

export class WatchIntroAction implements Action {
    readonly type = ActionTypes.WATCH_INTRO;
}

export class CloseIntroAction implements Action {
    readonly type = ActionTypes.CLOSE_INTRO;
}

export type Actions = WatchIntroAction | CloseIntroAction;
