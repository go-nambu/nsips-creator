import { createReducer, on } from '@ngrx/store';
import { update, clear } from './formState.actions';
import { pharmacyColumnsDefinition, patientColumnsDefinition } from 'src/const';

const initialState = [
  ...pharmacyColumnsDefinition,
  ...patientColumnsDefinition,
].reduce((prev, curr) => {
  return { ...prev, ...{ [curr.name]: curr?.const ?? null } };
}, {});

export const formStateReducer = createReducer(
  initialState,
  on(update, (state, param) => ({ ...state, ...param })),
  on(clear, (_state) => ({}))
);
