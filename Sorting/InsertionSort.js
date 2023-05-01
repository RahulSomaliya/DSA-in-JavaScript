// Due to its loop breaking nature, insertion sort is very simple yet a bit effective when we know that the list is almost sorted. Although the worst case time complexity is same as the bubble sort and selection sort, this is often not be the case.

// Time complexity for insertion sort when the array is almost sorted is O(n) i.e. linear time

function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  console.log(`Sorted array: `, array.join(' > '));
} // Time complexity: O(n^2)

const unsortedArray = [2, 97, 12, 25, 29, 11, 56, 100, 8];

InsertionSort(unsortedArray);
