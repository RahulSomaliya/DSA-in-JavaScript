// Que: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// our observation:
// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// #1: The brute force solution (no need to code this but it's just for example) - mention this as what's comes first to my mind (very simple solution)
const containsCommonItems = function (arr1, arr2) {
  for (const arrItem of arr1) {
    if (arr2.includes(arrItem)) {
      console.log('Common item found 🎉');
      return true;
    }
  }
  console.log('Nothing common found ☹️');
  return false;
}; // Time Complexity: O(a*b)

// #2: Better Solution as Big O here would be O(a+b) instead of O(a*b)
function containsCommonItems2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};

  arr1.forEach(item => {
    // if map item doesn't exists, add it
    if (!map[item]) {
      map[item] = true;
    }
  });

  // console.log(`💎 map: `, map);

  // loop through second array and check if item in second array exists on created object
  arr2.forEach(item => {
    if (map[item]) {
      console.log('common item found: ', item);
      return true;
    }
  });
  return false;
} // Time Complexity: O(a+b)

// more ES6 oriented way of doing this
function containsCommonItems3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
} // Time Complexity: O(a+b)

console.log(containsCommonItems2(array1, array2));
