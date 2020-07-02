import {createAction, props} from '@ngrx/store';

export const loadTimers = createAction(
  '[Timer] Load Timers'
);

export const setTime = createAction(
  '[Timer] Update Timer',
  props<{ timer: number }>()
);

export const startTime = createAction(
  '[Timer] start Timer'
);

export const stopTime = createAction(
  '[Timer] stop Timer'
);
