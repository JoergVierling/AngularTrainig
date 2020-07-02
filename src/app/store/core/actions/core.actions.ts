import {createAction, props} from '@ngrx/store';

export const log = createAction(
  '[Core] Log',
  props<{ message: any }>()
);
