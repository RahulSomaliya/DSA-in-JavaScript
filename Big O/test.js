// const nemo = ['nemo'];

// // prettier-ignore
// const everyone = ['nemo', 'bruce', 'marlin', 'dory', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank' ]

// const large = new Array(1000).fill('nemo');

// function findNemoOriginal(arr) {
//   let operations = 0;
//   if (!arr || !arr.length) return;
//   for (let i = 0; i < arr.length; i++) {
//     operations++;
//     if (arr[i] === 'nemo') {
//       // console.log('Found NEMO!');
//     }
//   }

//   // arr.find((arr) => {
//   //   operations++;
//   //   return arr === 'nemo';
//   // });
//   console.log(`💎 operations: `, operations);
// }

// findNemoOriginal(large);

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); // O(2)

// function printFirstItemThemFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (vari = 0; i < 100; i++) {
//     console.log('hi');
//   }
// }

// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });

//   boxes2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }

// // Time Complexity: O(boxes + boxes2)

// Log all pairs of array
// const boxes = [1, 2, 3, 4, 5];

// function logAllPairs(arr) {
//   arr.forEach(i => arr.forEach(j => console.log(i, j)));
// }

// logAllPairs(boxes); // O(n^2)

// // space complexity: O(1)
// function boooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log('boooooo!');
//   }
// }

// boooo([1, 2, 3, 4, 5]);

// // space complexity: O(n)
// const arrayOfHiNTimes = function (n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   return hiArray;
// };

// console.log(arrayOfHiNTimes(6));

// // Find 1st, find Nth...
// const array = [
//   {
//     tweet: 'hi',
//     date: 2012,
//   },
//   {
//     tweet: 'my',
//     date: 2014,
//   },
//   {
//     tweet: 'teddy',
//     date: 2018,
//   },
// ];

// // console.log(array.at(0));
// // console.log(array.at(-1));

// console.log('whatever I type'.length);
