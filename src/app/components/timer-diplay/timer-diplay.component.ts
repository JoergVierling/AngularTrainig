import {Component, Input, OnInit} from '@angular/core';
import {LogService} from '../../services/log/log.service';

@Component({
  selector: 'app-timer-diplay',
  templateUrl: './timer-diplay.component.html',
  styleUrls: ['./timer-diplay.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  @Input() actualTime: number;
  @Input() roundTime: number[];
  @Input() isRunning: boolean;

  constructor(private log: LogService) {
  }

  ngOnInit(): void {
    this.log.messageInfo('Component timer-display created');
  }
}
