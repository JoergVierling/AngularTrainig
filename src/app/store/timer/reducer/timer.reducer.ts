import { Action, createReducer, on } from '@ngrx/store';
import { TimerState } from '../state/action.state';
import {
  loadTimers,
  setTime,
  startTime,
  stopTime,
} from '../actions/timer.actions';

export const initialState: TimerState = {
  roundTimes: [],
  time: 0,
  timerIsStarted: false,
  timerIsInit: false,
};

export const reducer = createReducer(
  initialState,
  on(loadTimers, (state) => ({
    ...state,
  })),
  on(setTime, (state, { timer }) => ({
    ...state,
    time: timer,
  })),
  on(startTime, (state) => ({
    ...state,
    timerIsStarted: true,
  })),
  on(stopTime, (state) => ({
    ...state,
    timerIsStarted: false,
  }))
);

export function timerRecucer(
  state: TimerState | undefined,
  action: Action
): TimerState {
  return reducer(state, action);
}
