const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);

  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);

  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar thrown Function Error", () => {
  expect(() => {
    calculadora.somar("banana", 100);
  }).toThrow();
});

test("somar null + null deveria retornar thrown Function Error", () => {
  expect(() => {
    calculadora.somar(null, null);
  }).toThrow();
});

test("somar null + undefined deveria retornar thrown Function Error", () => {
  expect(() => {
    calculadora.somar(null, undefined);
  }).toThrow();
});

test("somar undefined + undefined deveria retornar thrown Function Error", () => {
  expect(() => {
    calculadora.somar(undefined, undefined);
  }).toThrow();
});

test("somar 1 + '1' deveria retornar thrown Function Error", () => {
  expect(() => {
    calculadora.somar(1, "1");
  }).toThrow();
});

test("dividir 1 por 1 deveria retornar 1", () => {
  const resultado = calculadora.dividir(1, 1);

  expect(resultado).toBe(1);
});

test("dividir 4 por 2 deveria retornar 2", () => {
  const resultado = calculadora.dividir(4, 2);

  expect(resultado).toBe(2);
});

test("dividir 0 por 0 deveria retornar NaN (Not a Number)", () => {
  const resultado = calculadora.dividir(0, 0);

  expect(resultado).toBe(NaN);
});
