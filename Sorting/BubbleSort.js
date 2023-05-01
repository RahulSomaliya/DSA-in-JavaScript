// Bubble sort is the simplest and least effective sorting algorithm. It is only used as a stepping stone for learning different sorting algos.
// Time complexity of bubble sorting is O(n^2)

function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(`Sorted array: `, array.join(' > '));
}

const unsortedArray = [2, 97, 12, 25, 29, 11, 56, 100, 8];

bubbleSort(unsortedArray);
