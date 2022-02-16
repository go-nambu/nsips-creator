import { createAction, props } from '@ngrx/store';

export const update = createAction('update', props<Object>());
export const clear = createAction('clear');
