import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './components/app.component';
import {TimerComponent} from './components/timer/timer.component';
import {TimerControlComponent} from './components/timer-control/timer-control.component';
import {TimerDiplayComponent} from './components/timer-diplay/timer-diplay.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './module/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerControlComponent,
    TimerDiplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
