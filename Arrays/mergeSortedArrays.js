// Given two arrays that are sorted, can you merge this two arrays that's still sorted

// directly writing the ES6 arrow format
const mergeSortedArrays = (...arrays) => arrays.flat().sort((a, b) => a - b);

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31];
