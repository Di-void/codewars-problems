function generateHashtaggedWord(sentence) {
  const trimmed_string = sentence.trim();

  if (trimmed_string === "") return false;

  const startsWithHashTag = trimmed_string.startsWith("#");

  let trimmed_string_array = trimmed_string.split(" ");

  let result = trimmed_string_array
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.substring(1);
    })
    .join("");

  if (startsWithHashTag) {
    return result.length > 140 ? false : result;
  } else {
    result = "#" + result;
    return result.length > 140 ? false : result;
  }
}

// ! TEST CASES

const test_one =
  "#HelloThereThanksForTryingMyKata" ===
  generateHashtaggedWord(" Hello there thanks for trying my Kata");

console.log(
  `Test ${" Hello there thanks for trying my Kata"} ===> ${
    test_one ? "PASSED" : "FAILED"
  } `
);

const test_two =
  "#HelloWorld" === generateHashtaggedWord("    Hello     World   ");

console.log(
  `Test ${"    Hello     World   "} ===> ${test_two ? "PASSED" : "FAILED"} `
);

const test_three = generateHashtaggedWord("") === false;

console.log(`Test "" ===> ${test_three ? "PASSED" : "FAILED"} `);
