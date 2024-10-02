function addToOne(n) {
  return n * (n + 1) / 2;
}

const t1 = performance.now();
addToOne(100000000);
const t2 = performance.now();
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds.`);
