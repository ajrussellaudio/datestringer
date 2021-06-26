import { byDay } from './byDay';
import { byHour } from './byHour';
import { byMinute } from './byMinute';
import { byMonth } from './byMonth';
import { bySecond } from './bySecond';
import { byWeek } from './byWeek';
import { byYear } from './byYear';

export function round(date: Date, unit: Unit): Date {
  const roundingFunctions: Record<Unit, DateTransformer> = {
    y: byYear,
    M: byMonth,
    w: byWeek,
    d: byDay,
    h: byHour,
    m: byMinute,
    s: bySecond,
  };
  const roundingFunction = roundingFunctions[unit];
  return roundingFunction(date);
}
