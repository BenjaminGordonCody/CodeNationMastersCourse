const bubbleSort = (array) => {
  let sorted = false;
  while (sorted != true) {
    let swaps = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swaps += 1;
      }
      if (swaps == 0) {
        sorted = true;
      }
    }
  }
  return array;
};

list = [5, 4, 3, 3, 2, 1];
console.log(bubbleSort(list));

/* 
## Pseudocode (for our version of bubble sort)

- for every element in collection:
	- if this element is higher than the next element, swap them

    - Were there any swaps?
	- if yes, repeat the entire process.
	- if no, the list is sorted.
*/
