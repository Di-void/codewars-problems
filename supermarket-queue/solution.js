function queueTime(queue, tills) {
  if (queue.length === 0) return 0; // No customers, no time

  // Create an array of tills with initial values
  const tillsArray = Array(tills).fill(0);
  console.log(tillsArray);

  // Iterate through the queue and assign customers to tills
  for (let i = 0; i < queue.length; i++) {
    // Find the index of the shortest queue/till
    const shortestQueueIndex = tillsArray.indexOf(Math.min(...tillsArray));
    console.log(shortestQueueIndex);

    // Add the customer's time to the shortest queue
    tillsArray[shortestQueueIndex] += queue[i];
  }

  // Return the maximum time taken from all tills
  return Math.max(...tillsArray);
}

//! TEST CASES

//? SIMPLE TESTS

console.log({
  tills: 1,
  queue_length: 0,
  queue: [],
  total_time: queueTime([], 1),
  expected: 0,
});
//* should return 0
console.log({
  tills: 1,
  queue_length: 4,
  queue: [1, 2, 3, 4],
  total_time: queueTime([1, 2, 3, 4], 1),
  expected: 10,
});
//* should return 10
console.log({
  tills: 1,
  queue_length: 3,
  queue: [5, 3, 4],
  total_time: queueTime([5, 3, 4], 1),
  expected: 12,
});
//* should return 12
console.log({
  tills: 100,
  queue_length: 5,
  queue: [1, 2, 3, 4, 5],
  total_time: queueTime([1, 2, 3, 4, 5], 100),
  expected: 5,
});
//* should return 5
console.log({
  tills: 2,
  queue_length: 6,
  queue: [2, 2, 3, 3, 4, 4],
  total_time: queueTime([2, 2, 3, 3, 4, 4], 2),
  expected: 9,
});
//* should return 9

//? EXAMPLES
console.log({
  tills: 2,
  queue_length: 4,
  queue: [10, 2, 3, 3],
  total_time: queueTime([10, 2, 3, 3], 2),
  expected: 10,
});
//* should return 10

console.log({
  tills: 2,
  queue_length: 3,
  queue: [2, 3, 10],
  total_time: queueTime([2, 3, 10], 2),
  expected: 12,
});
//* should return 12
