import { Action, createReducer, on } from '@ngrx/store';
import { log } from '../actions/core.actions';
import { CoreState } from '../state/core.state';

export const initialState: CoreState = {
  message: [],
};

export const reducer = createReducer(
  initialState,
  on(log, (state, { message }) => ({
    ...state,
    message: [...state.message, message],
  }))
);

export function coreRecducer(
  state: CoreState | undefined,
  action: Action
): CoreState {
  return reducer(state, action);
}
