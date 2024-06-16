import { createReducer, on } from '@ngrx/store';
import {
  addData,
  addDataSuccess,
  getData,
  getDataSuccess,
} from '../actions/demo.actions';

const initialData: Readonly<any[]> = [];

export const dataReducer = createReducer(
  initialData,
  on(getDataSuccess, (state, data) => {
    console.log('Get data success', data);
    return [...data.user];
  }),
  on(addData, (state, data) => {
    console.log(state);
    console.log(data);
    return [...state, data];
  }),
  on(addDataSuccess, (state, data) => [...state, data])
);
