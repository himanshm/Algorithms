function addToOne(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
const t1 = performance.now();
addToOne(100000000);
const t2 = performance.now();
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds.`);
// Time - O(n)
// Memory - O(1) - Only Accumulator variable and loop variables
