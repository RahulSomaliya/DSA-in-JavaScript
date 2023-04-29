// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
const n = 40;
function fibonacciIterative(n) {
  const fibonacciSeries = [0, 1];

  // we've 0, and 1 already in our series, so we'll add two less indexes from our number
  for (let i = 0; i <= n - 2; i++) {
    fibonacciSeries.push(fibonacciSeries.at(-1) + fibonacciSeries.at(-2));
  }

  console.log(`💎 fibonacciSeries[n]: `, fibonacciSeries[n]);
  return fibonacciSeries[n];
} // Time Complexity: O(n-2) ~O(n)
fibonacciIterative(n);

function fibonacciRecursive(n) {
  // 8th fib = 7th + 6th
  //         = (6th + 5th) + (5th + 4th)
  //         = ((5th + 4th) + (4th + 3th)) + (5th + 4th) ... and so and so
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // Time Complexity: O(2^n) - called as exponential time space (very bad time complexity)

const res = fibonacciRecursive(n);
console.log(`💎 recursive result: `, res);
