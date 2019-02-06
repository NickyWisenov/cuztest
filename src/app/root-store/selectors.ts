import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
    CommonStoreSelectors
} from './common-store';
import {
    AuthStoreSelectors
} from './auth-store';

export const selectIsWatch: MemoizedSelector<object, boolean> = createSelector(
    CommonStoreSelectors.selectCommonIsWatch,
    (commonIsWatch: boolean) =>  {
        return commonIsWatch;
    }
)

export const selectEmail: MemoizedSelector<object, string> = createSelector(
    AuthStoreSelectors.selectAuthEmail,
    (authEmail: string) => {
        return authEmail
    }   
)
