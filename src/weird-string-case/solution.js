function toWeirdCase(someString) {
  const wordsArray = someString.split(" ");
  //   * Solution 1
  // ========================================
  //   return wordsArray.reduce((acc, item, index, arr) => {
  //     acc += item
  //       .split("")
  //       .reduce(
  //         (acc, item, index) =>
  //           index % 2 === 0
  //             ? (acc += item.toUpperCase())
  //             : (acc += item.toLowerCase()),
  //         ""
  //       );
  //     if (index !== arr.length - 1) acc += " ";
  //     return acc;
  //   }, "");

  // ========================================

  // * Solution 2
  // ========================================
  //   let newString = "";
  //   for (let index = 0; index < wordsArray.length; index++) {
  //     newString += wordsArray[index]
  //       .split("")
  //       .reduce(
  //         (acc, item, index) =>
  //           index % 2 === 0
  //             ? (acc += item.toUpperCase())
  //             : (acc += item.toLowerCase()),
  //         ""
  //       );
  //     if (index !== wordsArray.length - 1)
  //       newString += " ";
  //   }
  //   return newString;

  // ==========================================

  // * Solution 3
  // ===============================================
  for (let i = 0; i < wordsArray.length; i++) {
    const wordArray = wordsArray[i].split("");
    for (let j = 0; j < wordsArray[i].length; j++) {
      j % 2 === 0
        ? (wordArray[j] = wordArray[j].toUpperCase())
        : (wordArray[j] = wordArray[j].toLowerCase());
    }
    wordsArray[i] = wordArray.join("");
  }

  return wordsArray.join(" ");
}

console.log(
  `Test 'String' => ${toWeirdCase("String")} (${
    toWeirdCase("String") === "StRiNg" ? "PASSED" : "FAILED"
  })`
);

console.log(
  `Test 'Weird string case' => ${toWeirdCase("Weird string case")} (${
    toWeirdCase("Weird string case") === "WeIrD StRiNg CaSe"
      ? "PASSED"
      : "FAILED"
  })`
);
