function twoSum(array, target) {
  let index1 = 0,
    index2 = 0,
    restartLoop = true;

  while (restartLoop) {
    restartLoop = false;
    for (let i = index1 + 1; i < array.length; i++) {
      const isMatch = array[index1] + array[i] === target;
      if (isMatch) {
        index2 = i;
        break;
      } else if (i === array.length - 1 && !isMatch) {
        index1++;
        console.log("Restarting....");
        restartLoop = true;
      } else {
        continue;
      }
    }
  }

  return [index1, index2];
}

console.log(`Expected ${twoSum([2, 3, 1], 4)} -=> [1, 2] or [2, 1]`);
