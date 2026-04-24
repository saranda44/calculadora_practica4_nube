export function suma(a: number, b: number): number {
    // Validar que ambos operandos sean números finitos
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error('Ambos operandos deben ser números finitos');
    }
    return a + b;
}

export function resta(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Ambos operandos deben ser números finitos');
  }
  return a - b;
}

