import { arithmetic } from './arithmetic';

describe('arithmetic', () => {
  it('can add a second', () => {
    const myLastBirthday = new Date(2020, 7, 15);
    const oneSecondLater = new Date(2020, 7, 15, 0, 0, 1);
    expect(arithmetic(myLastBirthday, '+1s')).toEqual(oneSecondLater);
  });

  it('can subtract a second', () => {
    const myLastBirthday = new Date(2020, 7, 15);
    const oneSecondLater = new Date(2020, 7, 15, 0, 0, 1);
    expect(arithmetic(oneSecondLater, '-1s')).toEqual(myLastBirthday);
  });

  it('can add five seconds', () => {
    const myLastBirthday = new Date(2020, 7, 15);
    const fiveSecondsLater = new Date(2020, 7, 15, 0, 0, 5);
    expect(arithmetic(myLastBirthday, '+5s')).toEqual(fiveSecondsLater);
  });

  it('can add a day', () => {
    const myLastBirthday = new Date(2020, 7, 15);
    const oneDayLater = new Date(2020, 7, 16);
    expect(arithmetic(myLastBirthday, '+1d')).toEqual(oneDayLater);
  });

  it('can add seven days or a week for the same result', () => {
    const myLastBirthday = new Date(2020, 7, 15);
    expect(arithmetic(myLastBirthday, '+7d')).toEqual(arithmetic(myLastBirthday, '+1w'));
  });

  it('can subtract a day', () => {
    const lastChristmas = new Date(2020, 11, 25);
    const lastChristmasEve = new Date(2020, 11, 24);
    expect(arithmetic(lastChristmas, '-1d')).toEqual(lastChristmasEve);
  });

  describe('months', () => {
    it('can add or subtract a calendar month, 31 days', () => {
      const may1st = new Date(2020, 4, 1);
      const june1st = new Date(2020, 5, 1);
      expect(arithmetic(may1st, '+1M')).toEqual(june1st);
      expect(arithmetic(june1st, '-1M')).toEqual(may1st);
    });

    it('can add or subtract a calendar month, 30 days', () => {
      const june1st = new Date(2020, 4, 1);
      const july1st = new Date(2020, 5, 1);
      expect(arithmetic(june1st, '+1M')).toEqual(july1st);
      expect(arithmetic(july1st, '-1M')).toEqual(june1st);
    });

    it('can add or subtract a calendar month, 28 days', () => {
      const february1st = new Date(2019, 1, 1);
      const march1st = new Date(2019, 2, 1);
      expect(arithmetic(february1st, '+1M')).toEqual(march1st);
      expect(arithmetic(march1st, '-1M')).toEqual(february1st);
    });

    it('can add or subtract a calendar month, 29 days', () => {
      const february1st = new Date(2020, 1, 1);
      const march1st = new Date(2020, 2, 1);
      expect(arithmetic(february1st, '+1M')).toEqual(march1st);
      expect(arithmetic(march1st, '-1M')).toEqual(february1st);
    });
  });

  describe('years', () => {
    it('can add a calendar year, normal year', () => {
      const february1st2018 = new Date(2018, 1, 1);
      const february1st2019 = new Date(2019, 1, 1);
      expect(arithmetic(february1st2018, '+1y')).toEqual(february1st2019);
    });

    it('can add a calendar year, leap year', () => {
      const february1st2020 = new Date(2020, 1, 1);
      const february1st2021 = new Date(2021, 1, 1);
      expect(arithmetic(february1st2020, '+1y')).toEqual(february1st2021);
    });

    it('can subtract a calendar year, normal year', () => {
      const february1st2018 = new Date(2018, 1, 1);
      const february1st2019 = new Date(2019, 1, 1);
      expect(arithmetic(february1st2019, '-1y')).toEqual(february1st2018);
    });

    it('can subtract a calendar year, leap year', () => {
      const february1st2020 = new Date(2020, 1, 1);
      const february1st2021 = new Date(2021, 1, 1);
      expect(arithmetic(february1st2021, '-1y')).toEqual(february1st2020);
    });
  });
});
