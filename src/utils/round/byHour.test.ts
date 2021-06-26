import { byHour } from './byHour';

describe('byHour', () => {
  it('rounds down to the start of the hour before half past', () => {
    const noon = new Date('2021-06-23T12:00:00');
    const notQuiteHalfPast = new Date('2021-06-23T12:29:59');
    expect(byHour(notQuiteHalfPast)).toEqual(noon);
  });

  it('rounds up to the start of the next hour after half past', () => {
    const oneOClock = new Date('2021-06-23T13:00:00');
    const halfPastNoon = new Date('2021-06-23T12:30:00');
    expect(byHour(halfPastNoon)).toEqual(oneOClock);
  });
});
