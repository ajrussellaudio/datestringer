import { parse } from './parse';

describe('parse', () => {
  beforeAll(() => {
    // Given the current date and time is 2020-05-01T00:00:00:
    jest.useFakeTimers('modern').setSystemTime(new Date('2020-05-01T00:00:00').getTime());
  });

  test('now minus one year rounded to the nearest year', () => {
    expect(parse('now-1y/y')).toEqual(new Date('2019-01-01T00:00:00'));
  });

  test('now rounded to the nearest year', () => {
    expect(parse('now/y')).toEqual(new Date('2020-01-01T00:00:00'));
  });

  test('now minus 1 day', () => {
    expect(parse('now-1d')).toEqual(new Date('2020-04-30T00:00:00'));
  });

  test('now add 1 day', () => {
    expect(parse('now+1d')).toEqual(new Date('2020-05-02T00:00:00'));
  });

  test('now minus four days and four hours', () => {
    expect(parse('now-4d-4h')).toEqual(new Date('2020-04-26T20:00:00'));
  });

  test('now plus one delta', () => {
    expect(parse('now+1D')).toEqual(new Date('2020-05-24T12:00:00'));
  });

  test('now plus two deltas', () => {
    expect(parse('now+2D')).toEqual(new Date('2020-06-17T00:00:00'));
  });
});
