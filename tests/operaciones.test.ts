import { describe, expect, it } from '@jest/globals';
import { suma } from '../src/operaciones';

describe('suma', () => {
  it('suma dos números positivos', () => {
    expect(suma(2, 3)).toBe(5);
  });

  it('suma números negativos', () => {
    expect(suma(-4, -6)).toBe(-10);
  });

  it('suma positivo y negativo', () => {
    expect(suma(10, -3)).toBe(7);
  });

  it('suma con cero', () => {
    expect(suma(0, 7)).toBe(7);
    expect(suma(5, 0)).toBe(5);
  });

  it('suma números decimales', () => {
    expect(suma(1.5, 2.5)).toBe(4);
  });

  it('lanza error si algún operando es NaN', () => {
    expect(() => suma(NaN, 2)).toThrow('finitos');
  });

  it('lanza error si algún operando es Infinity', () => {
    expect(() => suma(Infinity, 2)).toThrow('finitos');
  });
});