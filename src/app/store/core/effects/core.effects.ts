import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromRoot from '../../store';
import {LogService} from '../../../services/log/log.service';
import {log} from '../actions/core.actions';
import {tap} from 'rxjs/operators';


@Injectable()
export class CoreEffects {
  constructor(private actions: Actions, private store$: Store<fromRoot.State>, private logService: LogService) {
  }

  public startTimer$ = createEffect(() =>
    this.actions.pipe(
      ofType(log),
      tap(action => {
        this.logService.messageDebug(action.message);
      })
    ),
    { dispatch: false }
  );
}
