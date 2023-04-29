// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (!number || number < 0 || typeof number !== 'number')
    console.error('invalid input');
  // 5 = 5 * 4!
  // 4 = 4 * 3!
  // 3 = 3 * 2!
  // ...
  // 1 = 1
  // 5 = 5 * (4 * (3 * (2 * (1))))
  if (number === 2) return number;
  return number * findFactorialRecursive(number - 1);
} // 5 lines of code ignoring comments

function findFactorialIterative(number) {
  if (!number || number < 0 || typeof number !== 'number')
    console.error('invalid input');
  let answer = 1;
  for (let n = number; n > 0; n--) {
    answer *= n;
  }
  return answer;
} // 9 lines of code

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
