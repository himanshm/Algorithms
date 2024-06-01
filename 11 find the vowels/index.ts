// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str: string): number {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function voweslTwo(str: string): number {
  let count: number = 0;
  const vowelsChecker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowelsChecker.includes(char)) {
      count++;
    }
    ``;
  }

  return count;
}

console.log(voweslTwo('Why do you ask?'));
