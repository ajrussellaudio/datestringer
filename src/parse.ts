import { arithmetic } from './utils/arithmetic/arithmetic';
import { round } from './utils/round';

function getOpCodes(datestring: DateString): string[] {
  const opCodePattern = /[+-]\d+[yMwdhms]/g;
  const opCodes = datestring.match(opCodePattern);
  return opCodes || [];
}

function getRoundingUnit(datestring: DateString): Unit | null {
  const roundingPattern = /\/([yMwdhms])$/;
  const match = datestring.match(roundingPattern);
  return match ? (match[1] as Unit) : null;
}

export function parse(datestring: DateString): Date {
  const opcodes = getOpCodes(datestring);
  const roundingUnit = getRoundingUnit(datestring);
  const now = new Date();
  const unrounded = opcodes.reduce(arithmetic, now);
  return roundingUnit ? round(unrounded, roundingUnit) : unrounded;
}
