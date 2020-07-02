import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromRoot from '../../store';
import {
  loadTimers,
  setTime,
  startTime,
  stopTime,
} from '../actions/timer.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { TimerService } from '../../../services/timer/timer.service';
import { log } from '../../core/actions/core.actions';
import { isTimerInit } from '../selectors/timer.selectors';

@Injectable()
export class TimerEffects {
  constructor(
    private actions: Actions,
    private store$: Store<fromRoot.State>,
    private timerService: TimerService
  ) {}

  public loadTimer$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadTimers),
      withLatestFrom(this.store$.pipe(select(isTimerInit))),
      switchMap(([action, isTimerInitVariable]) => {
        if (!isTimerInitVariable) {
          this.timerService.inti();
        }

        return this.timerService.getTimer().pipe(
          map((value) => {
            return setTime({ timer: value });
          })
        );
      })
    )
  );

  public startTimer$ = createEffect(() =>
    this.actions.pipe(
      ofType(startTime),
      map((action) => {
        this.timerService.start();
        return log({ message: 'Timer gestarted' });
      })
    )
  );

  public endTimer$ = createEffect(() =>
    this.actions.pipe(
      ofType(stopTime),
      map((action) => {
        this.timerService.stop();
        return log({ message: 'Timer gestopt' });
      })
    )
  );
}
