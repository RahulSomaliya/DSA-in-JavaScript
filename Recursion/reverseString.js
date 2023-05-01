//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
  return str.split('').reverse().join('');
}

function reverseStringRecursion(str, reversedStr = '') {
  // 'A N Y T H I N G'

  if (!str) return reversedStr;

  return reverseStringRecursion(str.slice(0, -1), reversedStr + str.at(-1));
}

// reverseStringIteration('ANYTHING');
console.log(reverseStringRecursion('kushal somaliya'));
