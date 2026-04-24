import { describe, expect, it } from '@jest/globals';
import { suma, resta, multiplicacion } from '../src/operaciones';

// ------------------------ Pruebas para suma -----------------------
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


// ------------------------ Pruebas para resta -----------------------
describe('resta', () => {
  it('resta dos números positivos', () => {
    expect(resta(10, 3)).toBe(7);
  });

  it('resta con resultado negativo', () => {
    expect(resta(3, 10)).toBe(-7);
  });

  it('resta números negativos', () => {
    expect(resta(-5, -3)).toBe(-2);
  });

  it('resta con cero', () => {
    expect(resta(7, 0)).toBe(7);
    expect(resta(0, 7)).toBe(-7);
  });

  it('resta números decimales', () => {
    expect(resta(5.5, 2.5)).toBe(3);
  });

  it('lanza error si algún operando es NaN', () => {
    expect(() => resta(NaN, 2)).toThrow('finitos');
  });

  it('lanza error si algún operando es Infinity', () => {
    expect(() => resta(Infinity, 2)).toThrow('finitos');
  });
});

// ------------------------ Pruebas para multiplicación -----------------------
describe('multiplicacion', () => {
  it('multiplica dos números positivos', () => {
    expect(multiplicacion(4, 5)).toBe(20);
  });

  it('multiplica por cero', () => {
    expect(multiplicacion(7, 0)).toBe(0);
    expect(multiplicacion(0, 7)).toBe(0);
  });

  it('multiplica por uno', () => {
    expect(multiplicacion(9, 1)).toBe(9);
  });

  it('multiplica números negativos', () => {
    expect(multiplicacion(-3, -4)).toBe(12);
  });

  it('multiplica positivo por negativo', () => {
    expect(multiplicacion(5, -2)).toBe(-10);
  });

  it('multiplica decimales', () => {
    expect(multiplicacion(2.5, 4)).toBe(10);
  });

  it('lanza error si algún operando es NaN', () => {
    expect(() => multiplicacion(NaN, 2)).toThrow('finitos');
  });
});