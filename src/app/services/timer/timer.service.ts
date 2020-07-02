import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {LogService} from '../log/log.service';

@Injectable()
export class TimerService {
  started: boolean;

  public accutalTime = 0;
  private timerValue$: Observable<number>;
  private timerInternal$: Observable<number>;

  constructor(private logService: LogService) {

  }

  public getTimer(): Observable<number> {
    return this.timerValue$;
  }

  public inti(): void {
    this.timerInternal$ = timer(1000, 2000);

    this.timerValue$ = new Observable((observer) => {
      observer.next(this.accutalTime);
      this.timerInternal$.subscribe(x => {
        if (this.started) {
          this.logService.messageDebug('Timer new Tick');
          this.accutalTime++;
          observer.next(this.accutalTime);
        }
      });
    });
  }

  public start(): void {
    this.started = true;
  }

  public stop(): void {
    this.started = false;
  }
}
