# Supermarket Queue

There is a queue for the self-checkout tills at the supermarket. Your task is to write a function to calculate the total time required for all the customers to checkout out!

## Input

- `customers`: an array of positive integers representing the queue. Each integer represents a customer, and it's value is the amount of time they require to complete checking out.
- `n`: a positive integer representing the number of checkout tills available.

## Output

The function should return an integer, the total time required for all customers on the queue to complete checking out.

### Clarifications

- There is only **ONE** queue to be served by the available tills
- The order of the queue **NEVER** changes
- The first person on the queue (i.e, the first element in the array/list proceeds to a till as soon as it becomes free)

## Examples

```javascript
queueTime([5, 3, 4], 1);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2);
// should return 12
```
