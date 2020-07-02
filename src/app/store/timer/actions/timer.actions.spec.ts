import * as fromTimer from './timer.actions';

describe('loadTimers', () => {
  it('should return an action', () => {
    expect(fromTimer.loadTimers().type).toBe('[Timer] Load Timers');
  });
});
