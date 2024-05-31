// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = [];
  let index = 0;

  while (index < array.length) {
    const arraySlice = array.slice(index, index + size);
    chunked.push(arraySlice);
    index += size;
  }

  return chunked;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;

const result = chunk(numbers, size);
console.log(result);
