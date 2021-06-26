import { byWeek } from './byWeek';

describe('byWeek', () => {
  it('rounds down to the start of the week (Sunday)', () => {
    const sunday20th = new Date('2021-06-20T00:00:00');
    const wednesday23rd = new Date('2021-06-23T00:00:00');
    expect(byWeek(wednesday23rd)).toEqual(sunday20th);
  });

  it('rounds up to the start of the next week (Sunday)', () => {
    const sunday27th = new Date('2021-06-27T00:00:00');
    const thursday24th = new Date('2021-06-24T00:00:00');
    expect(byWeek(thursday24th)).toEqual(sunday27th);
  });

  it('rounds correctly when the week spans two months', () => {
    const sunday27th = new Date('2021-06-27T00:00:00');
    const tuesday29th = new Date('2021-06-29T00:00:00');
    const thursday1st = new Date('2021-07-01T00:00:00');
    const sunday4th = new Date('2021-07-04T00:00:00');
    expect(byWeek(tuesday29th)).toEqual(sunday27th);
    expect(byWeek(thursday1st)).toEqual(sunday4th);
  });

  it('rounds to midnight on Sunday', () => {
    const sundayMidnight = new Date('2021-06-20T00:00:00');
    const wednesdayAfternoon = new Date('2021-06-23T14:38:28');
    expect(byWeek(wednesdayAfternoon)).toEqual(sundayMidnight);
  });
});
