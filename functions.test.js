import { describe } from "yargs";
import { length } from "./modules/lenght.js";
import test from "node:test";

describe(`Given my lenght function`, () => {
  test(`when parametres are  length, then should be 4`, () => {
    const array = [1, 2, 3, 4];
    const result = length(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});
