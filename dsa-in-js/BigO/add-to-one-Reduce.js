function addToOneUsingReduce(n) {
  let result = 0;
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  return arr.reduce((acc, num) => acc + num, 0);
}

const t1 = performance.now();
const result = addToOneUsingReduce(100000000);
const t2 = performance.now();

console.log(`Sum: ${result}`);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
// Time - O(n)
// Memory - O(n)  forEach is applied to an array, so you must create and store the array, resulting in O(n) memory usage. Faster than forEach as it handles accumulation better.
