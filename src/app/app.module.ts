import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './components/app.component';
import {TimerComponent} from './components/timer/timer.component';
import {TimerControlComponent} from './components/timer-control/timer-control.component';
import {TimerDisplayComponent} from './components/timer-diplay/timer-diplay.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './module/material/material.module';
import {TimerService} from './services/timer/timer.service';

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
    MaterialModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
