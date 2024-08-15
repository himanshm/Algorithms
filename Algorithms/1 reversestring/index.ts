// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str: string): string {
  return str.split('').reverse().join('');
}

function reverseOne(str: string): string {
  let rev: string = '';
  for (let char of str) {
    rev = char + rev;
  }

  return rev;
}

function reverseTwo(str: string): string {
  return str.split('').reduce((rev, char) => char + rev, '');
}
