function decompose(n) {
  let pw = 0,
    dividend = n,
    divisor = 2,
    output = "";

  while (dividend !== 1) {
    if (dividend % divisor === 0) {
      dividend = dividend / divisor;
      pw++;
      continue;
    }

    if (pw) {
      output += `(${divisor}${pw === 1 ? "" : `**${pw}`})`;
    }
    do {
      divisor += divisor > 2 ? 2 : 1;
      for (let i = 2; i * i <= divisor; i++) {
        if (divisor % i === 0) {
          break;
        }
      }
    } while (dividend % divisor !== 0);
    pw = 0;
  }

  output += `(${divisor}${pw === 1 ? "" : `**${pw}`})`;

  return output;
}

// simple test case
console.log(decompose(9));
// console.log(decompose(36));

// tougher
// console.log(decompose(86240));
// console.log(decompose(7919));
