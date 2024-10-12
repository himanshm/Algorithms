// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = (n: number): void => {
  const result: string[] = [];
  let num = 1;
  while (num <= n) {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push('fizzBuzz');
    } else if (num % 3 === 0) {
      result.push('fizz');
    } else if (num % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(num.toString());
    }
    num++;
  }
  console.log(result.join(', '));
};

fizzBuzz(100);

const fizzBuzzOptimized = (n: number): void => {
  const result = Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    if (num % 15 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num.toString();
  });

  console.log(result.join(', '));
};
fizzBuzzOptimized(100);

const fizzBuzzV1 = (n: number): void => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  for (const num of numbers) {
    const result = `${num % 3 === 0 ? 'Fizz' : ''}${
      num % 5 === 0 ? 'Buzz' : ''
    }`;
    console.log(result || num);
  }
};

fizzBuzzV1(100);

const fizzBuzzV2 = (n: number): void => {
  Array.from({ length: n }, (_, i) => i + 1).forEach(num => {
    const result = `${num % 3 === 0 ? 'Fizz' : ''}${
      num % 5 === 0 ? 'Buzz' : ''
    }`;
    console.log(result || num);
  });
};

fizzBuzzV2(100);
