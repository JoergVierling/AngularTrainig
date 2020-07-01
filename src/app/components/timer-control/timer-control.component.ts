import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LogService} from '../../services/log/log.service';
import {TimerService} from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {

  @Output() stopTimer: EventEmitter<any> = new EventEmitter();
  @Output() startTimer: EventEmitter<any> = new EventEmitter();

  constructor(private log: LogService, public timer: TimerService) {
  }

  ngOnInit(): void {
    this.log.messageInfo('Component timer-display created');
  }

  start(): void {
    this.log.messageDebug('Component timer-display timer started');
    this.startTimer.emit();
  }

  stop(): void {
    this.log.messageDebug('Component timer-display timer ended');
    this.stopTimer.emit();
  }
}
