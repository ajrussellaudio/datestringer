const milliseconds: Record<Exclude<Unit, 'y' | 'M'>, number> = {
  w: 1000 * 60 * 60 * 24 * 7,
  d: 1000 * 60 * 60 * 24,
  h: 1000 * 60 * 60,
  m: 1000 * 60,
  s: 1000,
};

function getOpCodes(difference: number, opCodes: string[] = []): string[] {
  for (const [unit, length] of Object.entries(milliseconds)) {
    if (Math.abs(difference) < length) {
      continue;
    }
    const quantity = Math.floor(difference / length);
    const newOpCode = `${difference >= 0 ? '+' : ''}${quantity}${unit}`;
    return getOpCodes(difference - length * quantity, [...opCodes, newOpCode]);
  }

  return opCodes;
}

export function stringify(date: Date): DateString {
  const now = new Date();
  const difference = date.getTime() - now.getTime();
  return 'now' + getOpCodes(difference).join('');
}
