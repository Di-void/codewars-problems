import { expect, it } from "vitest";
import { returnMissing } from ".";

it("['a', 'b', 'c', 'd', 'f'] ==> 'e' ", () => {
  expect(returnMissing(["a", "b", "c", "d", "f"])).toStrictEqual("e");
});

it("['O', 'Q', 'R', 'S'] ==> 'P' ", () => {
  expect(returnMissing(["O", "Q", "R", "S"])).toStrictEqual("P");
});

it("['f', 'g', 'h', 'i', 'j', 'k', 'l', 'n'] ==> 'm' ", () => {
  expect(returnMissing(["f", "g", "h", "i", "j", "k", "l", "n"])).toStrictEqual(
    "m"
  );
});
