function addToOneUsingForEach(n) {
  let result = 0;
  const arr = Array.from({length: n}, (_, i) => i + 1);

  arr.forEach(num => {
    result += num;
  })

  return result;
}

const t1 = performance.now();
const result = addToOneUsingForEach(100000000);
const t2 = performance.now();

console.log(`Sum: ${result}`);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
// Time - O(n)
// Memory - 0(n)  reduce is typically used on an array. Therefore, you must first create an array of size n, which requires O(n) memory. This could be a significant overhead if n is large.
