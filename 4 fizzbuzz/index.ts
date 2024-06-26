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

function fizzBuzz(n: number): void {
  let num = 1;
  while (num <= n) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('fizzBuzz');
    } else if (num % 3 === 0) {
      console.log('fizz');
    } else if (num % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(num);
    }
    num++;
  }
}

console.log(fizzBuzz(100));
