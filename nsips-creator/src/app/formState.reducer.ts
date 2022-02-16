import { createReducer, on } from '@ngrx/store';
import { update, clear } from './formState.actions';

export const formStateReducer = createReducer(
  {},
  on(update, (state, param) => ({ ...state, ...param })),
  on(clear, (_state) => ({}))
);
