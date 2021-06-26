import { byDay } from './byDay';

describe('byDay', () => {
  it('rounds down to midnight for time before noon', () => {
    const midnight = new Date('2021-06-23T00:00:00');
    const almostNoon = new Date('2021-06-23T11:59:59');
    expect(byDay(almostNoon)).toEqual(midnight);
  });

  it('rounds up to midnight the next day after noon', () => {
    const justAfterNoon = new Date('2021-06-23T12:00:01');
    const midnightNextDay = new Date('2021-06-24T00:00:00');
    expect(byDay(justAfterNoon)).toEqual(midnightNextDay);
  });
});
