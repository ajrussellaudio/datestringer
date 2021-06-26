import { bySecond } from './bySecond';

describe('bySecond', () => {
  it('rounds down to the start of the second before 500 milliseconds in', () => {
    const twentyOneSeconds = new Date('2021-06-23T12:15:21');
    const notQuite500MillisecondsLater = new Date('2021-06-23T12:15:21.499');
    expect(bySecond(notQuite500MillisecondsLater)).toEqual(twentyOneSeconds);
  });

  it('rounds up to the start of the next minute after 30 seconds in', () => {
    const twentyOneSeconds = new Date('2021-06-23T12:15:21');
    const exactly500MillisecondsBefore = new Date('2021-06-23T12:15:20.500');
    expect(bySecond(exactly500MillisecondsBefore)).toEqual(twentyOneSeconds);
  });
});
