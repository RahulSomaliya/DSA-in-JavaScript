// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

const fiboIndex = 25

// This func has O(2^n) time complexity -> really bad
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`💎 fibonacci(${fiboIndex}): `, fibonacci(fiboIndex));
console.log(`💎 calculations: `, calculations);

console.log('--- cached fibo ---');
// now, we're going to turn this to O(n) using memoization!!!!!

// this the best use case of dynamic programming - we can actually improve time and space complexity of problems by using it correctly

let calcs = 0;
function fibonacciCached() {
  let cache = {};
  let fibo = function (n) {
    if (n in cache) return cache[n];

    calcs++;
    if (n < 2) {
      cache[n] = n;
      return cache[n];
    }
    cache[n] = fibo(n - 1) + fibo(n - 2);
    return cache[n];
  };
  return fibo;
}
const fibonacciMemoized = fibonacciCached();

console.log(
  `💎 fibonacciMemoized(${fiboIndex}): `,
  fibonacciMemoized(fiboIndex)
);
console.log(`💎 calcs: `, calcs);
