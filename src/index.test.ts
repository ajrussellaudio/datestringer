import { add } from '.';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
});
