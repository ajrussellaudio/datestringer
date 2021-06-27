import { parseOpCode } from '../parseOpCode/parseOpCode';

export function arithmetic(date: Date, opCode: OpCode): Date {
  const { operation, quantity, unit } = parseOpCode(opCode);
  const offset = quantity * (operation === '+' ? 1 : -1);

  if (unit === 'y') {
    const dateWithNewYear = new Date(date);
    dateWithNewYear.setFullYear(date.getFullYear() + offset);
    return dateWithNewYear;
  }

  if (unit === 'M') {
    const dateWithNewMonth = new Date(date);
    dateWithNewMonth.setMonth(date.getMonth() + offset);
    return dateWithNewMonth;
  }

  const milliseconds: Record<Exclude<Unit, 'y' | 'M'>, number> = {
    s: 1000,
    m: 1000 * 60,
    h: 1000 * 60 * 60,
    d: 1000 * 60 * 60 * 24,
    w: 1000 * 60 * 60 * 24 * 7,
  };

  return new Date(date.getTime() + milliseconds[unit] * offset);
}
