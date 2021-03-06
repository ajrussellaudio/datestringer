type ParsedOperation = {
  operation: '+' | '-';
  quantity: number;
  unit: Unit;
};

export function parseOpCode(opCode: string): ParsedOperation {
  return {
    operation: /^\+/.test(opCode) ? '+' : '-',
    quantity: Number(opCode.replace(/\D/g, '')),
    unit: opCode.slice(-1) as Unit,
  };
}
