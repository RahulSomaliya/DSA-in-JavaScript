// Selection sort is also an almost useless sorting algo, just for learning purpose. As it also has O(n^2) time complexity

function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] > array[j]) {
        smallest = array[j];
      }
    }
    if (smallest !== array[i]) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
  console.log(`Sorted array: `, array.join(' > '));
}

const unsortedArray = [2, 97, 12, 25, 29, 11, 56, 100, 8];

SelectionSort(unsortedArray);
