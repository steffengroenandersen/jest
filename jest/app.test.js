const { sum, substract, cloneArray, getPerson } = require("../app");

test("Should_Return3_When_Sum(1, 2)", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Should_return1_When_Substract(5, 4)", () => {
  expect(substract(5, 4)).toBe(1);
});

test("Should_ReturnNewArray_when_Called", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

test("Should_ReturnPersonObject_When_Called", () => {
  const expectedData = {
    name: expect.any(String),
    age: expect.any(Number),
    isDeveloper: expect.any(Boolean),
  };

  expect(getPerson("Steffen", 32, true)).toEqual(expectedData);
});
