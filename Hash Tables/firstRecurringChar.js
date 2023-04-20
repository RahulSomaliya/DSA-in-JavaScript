// Que: Return first recurring character in a given array

// Google Question
const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

const arr3 = [2, 3, 4, 5];
// It should return undefined

// O(n) solution
const findFirstRecursion = function (arr) {
  // I've used object here for storing previous iterations, so that I could have O(1) lookups insteads of using arrays that would gives O(n) lookup time complexity
  const chars = {};
  for (const character of arr) {
    if (chars[character]) {
      console.log(character);
      return;
    }
    chars[character] = true;
  }
  console.log(undefined);
};

findFirstRecursion(arr1);
findFirstRecursion(arr2);
findFirstRecursion(arr3);
