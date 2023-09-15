import { expect, it } from "vitest";
import { countBits } from ".";

it("arg: 1234 should return 5", () => {
  expect(countBits(1234)).toStrictEqual(5);
});
