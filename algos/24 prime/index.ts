const isPrime = (num: number): boolean => {
  if (num <= 1) return false;

  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;

    i += 6;
  }
  return true;
};

console.log(isPrime(141));

const checkAndAddDivisor = (num: number, divisor: number, divisors: number[]): boolean => {
  if (num % divisor === 0) {
    // If num is divisible by divisor, add divisor and its complement to the array
    divisors.push(divisor, num / divisor);
    // Return true indicating num is not prime
    console.log(divisors);
    return true; // if num is divisible by divisor (indicating that num is not prime).
  }
  return false; // if num is not divisible by divisor, allow the calling code to continue checking other potential divisors.
};

const getUniqueSortedDivisors = (divisors: number[]): number[] => Array.from(new Set(divisors)).sort((a, b) => a - b);

const isPrimeWithDivisors = (num: number): boolean => {
  const divisors: number[] = [];
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (checkAndAddDivisor(num, 2, divisors) || checkAndAddDivisor(num, 3, divisors)) {
    // If divisible by 2 or 3, log divisors and return false
    const uniqueDivisors = getUniqueSortedDivisors(divisors);
    console.log(`Divisors of ${num} are: ${uniqueDivisors.join(', ')}`);
    return false;
  }
  // Check divisibility for numbers of the form 6k ± 1 up to √num
  let i = 5;
  while (i * i <= num) {
    if (checkAndAddDivisor(num, i, divisors) || checkAndAddDivisor(num, i + 2, divisors)) {
      // If a divisor is found, log divisors and return false
      const uniqueDivisors = getUniqueSortedDivisors(divisors);
      console.log(`Divisors of ${num} are: ${uniqueDivisors.join(', ')}`);
      return false;
    }
    i += 6;
  }

  console.log(`${num} is prime and has no divisors other than 1 and itself.`);
  return true;
};

isPrimeWithDivisors(141);
