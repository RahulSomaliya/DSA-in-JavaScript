// Reversing a string is added into this module as string under-the-hood are just arrays in javascript. So, we'll be treating any string queries just as array queries.

const reverseString = function (str) {
  // guard clause
  if (!str || str.length < 2 || typeof str !== 'string')
    return `hmm that's not a good input!`;

  const strArr = str.split('');
  let reversed = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversed += strArr[i];
  }
  return reversed;
};

// Now, that could be simplified by ES6 as;
const reverseString2 = function (str) {
  // the same guard clause

  return str.split('').reverse().join('');
};

// Even shorter with arrow syntax
const reverseString3 = str => [...str].reverse().join('');

reverseString('Rahul Somaliya');
reverseString2('Rahul');
