import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TimerState} from '../state/action.state';

const timerFeature = createFeatureSelector<TimerState>('timer');

export const getTime = createSelector(timerFeature, (timer) => timer.time);
export const isRunning = createSelector(timerFeature, (timer) => timer.timerIsStarted);
export const getSplitTimes = createSelector(timerFeature, (timer) => timer.roundTimes);

export const isTimerInit = createSelector(timerFeature, (timer) => timer.timerIsInit);
