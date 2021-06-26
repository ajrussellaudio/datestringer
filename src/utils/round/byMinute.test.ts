import { byMinute } from './byMinute';

describe('byMinute', () => {
  it('rounds down to the start of the minute before 30 seconds in', () => {
    const quarterPast = new Date('2021-06-23T12:15:00');
    const twentyNineSecondsLater = new Date('2021-06-23T12:15:29');
    expect(byMinute(twentyNineSecondsLater)).toEqual(quarterPast);
  });

  it('rounds up to the start of the next minute after 30 seconds in', () => {
    const quarterPast = new Date('2021-06-23T12:15:00');
    const thirtySecondsEarlier = new Date('2021-06-23T12:14:30');
    expect(byMinute(thirtySecondsEarlier)).toEqual(quarterPast);
  });
});
