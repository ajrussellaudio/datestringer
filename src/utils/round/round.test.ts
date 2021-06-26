import { round } from './round';

describe('round', () => {
  test('rounds by month', () => {
    expect(round(new Date('2020-04-15T23:59:59'), 'M')).toEqual(new Date('2020-04-01T00:00:00'));
  });

  test('rounds by year', () => {
    expect(round(new Date('2020-06-30T23:59:59'), 'y')).toEqual(new Date('2020-01-01T00:00:00'));
  });

  test('rounds by week (to Sunday)', () => {
    expect(round(new Date('2021-06-23T14:38:28'), 'w')).toEqual(new Date('2021-06-20T00:00:00'));
  });

  test('rounds by day', () => {
    expect(round(new Date('2021-06-25T14:38:28'), 'd')).toEqual(new Date('2021-06-26T00:00:00'));
  });

  test('rounds by hour', () => {
    expect(round(new Date('2021-06-25T14:38:28'), 'h')).toEqual(new Date('2021-06-25T15:00:00'));
  });

  test('rounds by minute', () => {
    expect(round(new Date('2021-06-25T14:38:28'), 'm')).toEqual(new Date('2021-06-25T14:38:00'));
  });

  test('rounds by second', () => {
    expect(round(new Date('2021-06-25T14:38:28.600'), 's')).toEqual(new Date('2021-06-25T14:38:29'));
  });
});
