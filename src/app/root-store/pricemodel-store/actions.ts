import { Action } from '@ngrx/store';

export enum ActionTypes {
    INIT_JOB_TYPE = '[Pricemodel Action] INIT JOB TYPE',
    SET_FROM_LANG = '[Pricemodel Action] SET SOURCE LANG',
    SET_TO_LANG = '[Pricemodel Action] SET TARGET LANG',
    SET_START_DATE = '[Pricemodel Action] SET START DATE',
    SET_END_DATE = '[Pricemodel Action] SET END DATE',
    SET_NATURE = '[Pricemodel Action] SET NATURE',
    SET_WORD_COUNT = '[Pricemodel Action] SET WORD COUNT',
    UPLOAD_DOCUMENT = '[Pricemodel Action] SET UPLOAD DOCUMENT',
    SET_CURRENCY = '[Pricemodel Action] SET CURRENCY',
    SET_PROOF_READING = '[Pricemodel Action] SET PROOF READING',
    SET_LAO_PROJECT = '[Pricemodel Action] SET LAO PROJECT',
    SET_JOB = '[Pricemodel Action] SET JOB',
    SET_COUNTRY = '[Pricemodel Action] SET COUNTRY',
    SET_PROVINCE = '[Pricemodel Action] SET PROVINCE',
    SET_PROMOTION_CODE = '[Pricemodel Action] SET PROMOTION CODE',
}

export class INIT_JOB_TYPE implements Action {
    readonly type = ActionTypes.INIT_JOB_TYPE;

    constructor(public payload: {job_type: number}) {}
}

export class SET_FROM_LANG implements Action {
    readonly type = ActionTypes.SET_FROM_LANG;

    constructor(public payload: {from_language: number}) {}
}

export class SET_TO_LANG implements Action {
    readonly type = ActionTypes.SET_TO_LANG;

    constructor(public payload: {to_language: number}) {}
}

export class SET_NATURE implements Action {
    readonly type = ActionTypes.SET_NATURE;

    constructor(public payload: {nature: number}) {}
}

export class SET_START_DATE implements Action {
    readonly type = ActionTypes.SET_START_DATE;

    constructor(public payload: {start_date: string}) {}
}

export class SET_END_DATE implements Action {
    readonly type = ActionTypes.SET_END_DATE;

    constructor(public payload: {end_date: string}) {}
}

export class SET_LAO_PROJECT implements Action {
    readonly type = ActionTypes.SET_LAO_PROJECT;

    constructor(public payload: {is_lao_project: boolean}) {}
}

export class SET_WORD_COUNT implements Action {
    readonly type = ActionTypes.SET_WORD_COUNT;
    
    constructor(public payload: {word_count: number}) {}
}

export type Actions = INIT_JOB_TYPE | SET_FROM_LANG | SET_TO_LANG | SET_NATURE | SET_START_DATE | SET_END_DATE | SET_LAO_PROJECT | SET_WORD_COUNT;