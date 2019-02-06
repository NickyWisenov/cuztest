import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getIsWatch = (state: State): boolean => state.isWatch;

export const selectCommonState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('common');

export const selectCommonIsWatch: MemoizedSelector<
    object, 
    boolean
> = createSelector(selectCommonState, getIsWatch);
