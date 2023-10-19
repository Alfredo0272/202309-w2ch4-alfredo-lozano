import { length } from "./tools/lenght.js";
import { concat } from "./tools/concat.js";
import { push } from "./tools/push.js";
import { pop } from "./tools/pop.js";

import { describe, test, expect } from "@jest/globals";

describe(`Given my lenght function`, () => {
  test(`when parametres are  length, then should be 4`, () => {
    const array = [1, 2, 3, 4];
    const result = length(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

describe("Given my concat function", () => {
  test("when parameters are an array, then should be the concat", () => {
    const array = [1, 2, 3];
    const result = concat(array);
    const expectedResult = [1, 2, 3, 5, 6, 7];
    expect(result).toEqual(expectedResult);
  });
});

describe("Given my push function", () => {
  test("If you give it an array and a parameter, it should push into the array", () => {
    const a = [1, 2, 3];
    const b = 4;
    const result = push(a, b);
    const expectedResult = [1, 2, 3, 4];
    expect(result).toEqual(expectedResult);
  });
});

describe("Given my push pop", () => {
  test("If you give it an array it will eliminate the last element of it, it will return a new array", () => {
    const array1 = [1, 2, 3, 4];
    const result = pop(array1);
    const expectedResult = [1, 2, 3];
    expect(result).toEqual(expectedResult);
  });
});
