import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getEmail = (state: State): string => state.email;

export const selectAuthState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('auth');

export const selectAuthEmail: MemoizedSelector<
    object,
    string
> = createSelector(selectAuthState, getEmail);
