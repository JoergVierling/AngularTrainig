import {Component, OnInit} from '@angular/core';
import {LogService} from '../../services/log/log.service';
import {TimerService} from '../../services/timer/timer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timer$: Observable<number>;
  roundTimer: number[] = [];

  constructor(private logService: LogService, public timerService: TimerService) {
  }

  ngOnInit(): void {
    this.logService.messageInfo('Component timer-display created');

    this.timer$ = this.timerService.getTimer();
  }

  timerStart(): void {
    this.timerService.start();
  }

  timerStop(): void {
    this.timerService.stop();

    this.roundTimer.push(this.timerService.accutalTime);
    this.logService.messageInfo(this.roundTimer);
  }
}
