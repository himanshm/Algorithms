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
}

console.log(fizzBuzz(100));

// In JavaScript and TypeScript, the const keyword means that the variable cannot be reassigned to a different value. However, it does not mean that the value itself is immutable. For arrays and objects, const ensures that the reference to the array or object remains constant, but the contents of the array or object can still be modified.

// When we declare result as const in the fizzBuzz function, we ensure that result always points to the same array, but we can still use methods like push to modify the contents of the array.
