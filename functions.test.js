import { length } from "./tools/lenght.js";
import { concat } from "./tools/concat.js";
import { describe, test, expect } from "@jest/globals";

describe(`Given my lenght function`, () => {
  test(`when parametres are  length, then should be 4`, () => {
    const array = [1, 2, 3, 4];
    const result = length(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

// describe("Given my concat function", () => {
//   test("when parameters are an array, then should be the concat", () => {

//     const array = [1, 2, 3];
//     const result = concat(array);
//     const expectedResult = [1, 2, 3, 5, 6, 7];
//     expect(result).toEqual(expectedResult);
//   });
// });
