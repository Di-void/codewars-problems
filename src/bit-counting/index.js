export function countBits(number) {
  if (number === 0) return 0;
  let bitCount = 0;

  const binaryFormat = number.toString(2);

  for (let index = 0; index < binaryFormat.length; index++) {
    if (binaryFormat.charAt(index) == 1) bitCount++;
    continue;
  }

  return bitCount;
}
