import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getFromLang = (state: State): number => state.from_language;
const getToLang = (state: State): number => state.to_languaage;

export const selectCommonState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('pricemodel');

export const selectFromLang: MemoizedSelector<
    object, 
    number
> = createSelector(selectCommonState, getFromLang);

export const selectToLang : MemoizedSelector<
    object,
    number
> = createSelector(selectCommonState, getToLang);

