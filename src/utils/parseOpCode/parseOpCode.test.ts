import { parseOpCode } from './parseOpCode';

describe('parseOpCode', () => {
  it("can read the operation, quantity and unit from op code '+3m'", () => {
    const { operation, quantity, unit } = parseOpCode('+3m');
    expect(operation).toEqual('+');
    expect(quantity).toEqual(3);
    expect(unit).toEqual('m');
  });

  it("can read the operation, quantity and unit from op code '-24h'", () => {
    const { operation, quantity, unit } = parseOpCode('-24h');
    expect(operation).toEqual('-');
    expect(quantity).toEqual(24);
    expect(unit).toEqual('h');
  });
});
