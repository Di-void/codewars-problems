import { expect, it, describe } from "vitest";
import { isPangram } from ".";

const string_one = "";
const string_two = "abcdefghijklmnopqrstuvwxyz";
const string_three = "abbcdeffffgh123 ij kl';mnopqrstuvwxyz";
const string_four = "The quick brown fox jumps over the lazy dog";
const string_five = "a b c def 123";

describe(`detect whether arg is a panagram`, () => {
  it(`arg: "${string_one}" => FALSE`, () => {
    expect(isPangram(string_one)).toEqual(false);
  });

  it(`arg: "${string_two}" => TRUE`, () => {
    expect(isPangram(string_two)).toEqual(true);
  });

  it(`arg: "${string_three}" => TRUE`, () => {
    expect(isPangram(string_three)).toEqual(true);
  });

  it(`arg: "${string_four}" => TRUE`, () => {
    expect(isPangram(string_four)).toEqual(true);
  });

  it(`arg: "${string_five}" => FALSE`, () => {
    expect(isPangram(string_five)).toEqual(false);
  });
});
