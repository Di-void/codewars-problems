export function returnMissing(letters) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let isLowerCase = letters[0].toLowerCase() === letters[0];

  const sliced = alphabets.slice(alphabets.indexOf(letters[0].toLowerCase()));
  for (let i = 1; i < sliced.length; i++) {
    const match = letters[i].toLowerCase();

    if (sliced[i] === match) continue;

    return isLowerCase ? sliced[i] : sliced[i].toUpperCase();
  }
}
