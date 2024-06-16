import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<any>('data');

export const demoSelector = createSelector(
  selectUserState,
  (state: any) => state
);
