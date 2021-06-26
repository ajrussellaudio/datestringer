import { byYear } from './byYear';

describe('byYear', () => {
  it('rounds down to the start of the year', () => {
    const january1st2020 = new Date(2020, 0, 1);
    const january2nd2020 = new Date(2020, 0, 2);
    const june30th2020 = new Date(2020, 5, 30);
    expect(byYear(january2nd2020)).toEqual(january1st2020);
    expect(byYear(june30th2020)).toEqual(january1st2020);
  });

  it('rounds up to the start of the next year', () => {
    const january1st2021 = new Date(2021, 0, 1);
    const july1st2020 = new Date(2020, 6, 1);
    const december31st2020 = new Date(2020, 11, 1);
    expect(byYear(july1st2020)).toEqual(january1st2021);
    expect(byYear(december31st2020)).toEqual(january1st2021);
  });
});
