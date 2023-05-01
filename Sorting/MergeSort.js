// Merge sort has advantage of divide and conquer i.e. would encounter log(n) related time complexity

// Time complexity: O(n log(n))

function MergeSort(array) {
  if (array.length === 1) return array;

  // Split array into right and left
  // 8 / 2 = 4 -> left: 0 to 4 (5 elements), right: 5 to 8(4 elements)
  const leftLength = Math.floor(array.length / 2);
  const left = array.slice(0, leftLength);
  const right = array.slice(leftLength, array.length);

  return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
  // left: [0,1], right: [1,2]
  let sortedArray = [];

  while (left.length === 0 || right.length === 0) {
    if (left[0] > right[0]) {
      sortedArray.push(right.splice(0, 1).at(0));
    }
  }

  sortedArray = [...sortedArray, ...left, ...right];

  return sortedArray;
}

const unsortedArray = [2, 97, 12, 25, 29, 11, 56, 100, 8];

const sortedArray = MergeSort(unsortedArray);
console.log(`💎 --- --- --- sortedArray: `, sortedArray);
