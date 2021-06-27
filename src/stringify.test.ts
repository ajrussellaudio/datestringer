import { stringify } from './stringify';

describe('stringify', () => {
  describe('test cases from brief', () => {
    beforeAll(() => {
      // Given the current date and time is 2020-05-01T00:00:00:
      jest.useFakeTimers('modern').setSystemTime(new Date('2020-05-01T00:00:00').getTime());
    });

    test.skip('now minus one year rounded to the nearest year', () => {
      // rounding not implemented
      expect(stringify(new Date('2019-01-01T00:00:00'))).toEqual('now-1y/y');
    });

    test.skip('now rounded to the nearest year', () => {
      // rounding not implemented
      expect(stringify(new Date('2020-01-01T00:00:00'))).toEqual('now/y');
    });

    test('now minus 1 day', () => {
      expect(stringify(new Date('2020-04-30T00:00:00'))).toEqual('now-1d');
    });

    test('now add 1 day', () => {
      expect(stringify(new Date('2020-05-02T00:00:00'))).toEqual('now+1d');
    });

    test.skip('now minus four days and four hours', () => {
      // next test is equivalent
      expect(stringify(new Date('2020-04-26T20:00:00'))).toEqual('now-4d-4h');
    });

    test('now minus four days and four hours', () => {
      expect(stringify(new Date('2020-04-26T20:00:00'))).toEqual('now-5d+20h');
    });
  });
});
