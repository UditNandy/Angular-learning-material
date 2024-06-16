import { createAction, props } from '@ngrx/store';

export const getData = createAction('[Data] get data');
export const getDataSuccess = createAction(
  '[Data] get data success',
  (data: any) => data
);
export const addData = createAction('[Data] add data', (data: any) => data);
export const addDataSuccess = createAction(
  '[Data] add data success',
  (data: any) => data
);
