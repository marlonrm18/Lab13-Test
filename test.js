const testSuma = require('./suma');

// 1 +1 = 2
test('suma de dos numeros enteros', () => {
    expect(testSuma(1, 1)).toBe(2);
});

// -1 + 1 = 0
test('suma de negativo con entero', () => {
    expect(testSuma(-1, 1)).toBe(0);
});

// 0.1 + 0.2 = 0.3
test('suma de dos numeros con decimales', () => {
    expect(testSuma(0.1, 0.2)).toBeCloseTo(0.3);
});

// -0.1 + 0.1 = 0
test('suma de numero decimal negativo con un decimal positivo', () => {
    expect(testSuma(-0.1, 0.1)).toBe(0);
});

// 1 + 'a' = error
test('error al ingresar un caracter', () => {
    expect(() => testSuma('a', 1)).toThrow();
});