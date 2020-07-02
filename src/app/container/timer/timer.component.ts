import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/store';
import { log } from '../../store/core/actions/core.actions';
import {
  getTime,
  isRunning,
} from '../../store/timer/selectors/timer.selectors';
import {
  loadTimers,
  startTime,
  stopTime,
} from '../../store/timer/actions/timer.actions';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timer$: Observable<number>;
  timerIsRunning$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTimers());
    this.store.dispatch(log({ message: 'Component timer-display created' }));

    this.timer$ = this.store.pipe(select(getTime));
    this.timerIsRunning$ = this.store.pipe(select(isRunning));
  }

  timerStart(): void {
    this.store.dispatch(startTime());
  }

  timerStop(): void {
    this.store.dispatch(stopTime());
  }

  log($event: any): void {
    this.store.dispatch(log({ message: $event }));
  }
}
