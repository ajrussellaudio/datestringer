import { byMonth } from './byMonth';

const APRIL = 3; // months zero-indexed
const MAY = 4;

describe('byMonth', () => {
  it('rounds down to the start of the month', () => {
    const april1st = new Date(2020, APRIL, 1);
    const april2nd = new Date(2020, APRIL, 2);
    const april15th = new Date(2020, APRIL, 15);
    expect(byMonth(april2nd)).toEqual(april1st);
    expect(byMonth(april15th)).toEqual(april1st);
  });

  it('rounds up to the start of the next month', () => {
    const april16th = new Date(2020, APRIL, 16);
    const april30th = new Date(2020, APRIL, 30);
    const may1st = new Date(2020, MAY, 1);
    expect(byMonth(april16th)).toEqual(may1st);
    expect(byMonth(april30th)).toEqual(may1st);
  });
});
