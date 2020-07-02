import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {

  @Output() stopTimer: EventEmitter<any> = new EventEmitter();
  @Output() startTimer: EventEmitter<any> = new EventEmitter();
  @Output() sendMessage: EventEmitter<any> = new EventEmitter();

  @Input() isRunning: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.sendMessage.emit('Component timer-display created');
  }

  start(): void {
    this.sendMessage.emit('Component timer-display timer started');
    this.startTimer.emit();
  }

  stop(): void {
    this.sendMessage.emit('Component timer-display timer ended');
    this.stopTimer.emit();
  }
}
