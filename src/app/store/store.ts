import {ActionReducerMap} from '@ngrx/store';
import {CoreState} from './core/state/core.state';
import {TimerState} from './timer/state/action.state';
import {coreRecducer} from './core/reducer/core.reducer';
import {timerRecucer} from './timer/reducer/timer.reducer';

export interface State {
  core: CoreState;
  timer: TimerState;
}

export const reducers: ActionReducerMap<State> = {
  core: coreRecducer,
  timer: timerRecucer
};
