import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './components/app.component';
import {TimerControlComponent} from './components/timer-control/timer-control.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './module/material/material.module';
import {TimerService} from './services/timer/timer.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/store';
import {TimerEffects} from './store/timer/effects/timer.effects';
import {CoreEffects} from './store/core/effects/core.effects';
import {TimerDisplayComponent} from "./components/timer-display/timer-display.component";
import {TimerComponent} from "./container/timer/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerControlComponent,
    TimerDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {

      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument(
      {maxAge: 25, logOnly: environment.production}
    ),
    EffectsModule.forRoot([TimerEffects, CoreEffects])
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
