import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDiplayComponent } from './timer-diplay.component';

describe('TimerDiplayComponent', () => {
  let component: TimerDiplayComponent;
  let fixture: ComponentFixture<TimerDiplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDiplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
