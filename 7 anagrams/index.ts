// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str: string): string {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(strA: string, strB: string): boolean {
  return cleanString(strA) === cleanString(strB);
}

console.log(anagrams('rail safety', 'fairy tales'));

function areAnagrams(strA: string, strB: string): boolean {
  // Remove whitesapces and convert strings to lowercase
  const normalizedStrA = strA.replace(/\s/g, '').toLowerCase();
  const normalizedStrB = strB.replace(/\s/g, '').toLowerCase();

  if (normalizedStrA.length !== normalizedStrB.length) {
    return false;
  }

  // Create a frequency map for each string
  const charMapA: { [key: string]: number } = {};
  const charMapB: { [key: string]: number } = {};

  for (const char of normalizedStrA) {
    charMapA[char] = (charMapA[char] || 0) + 1;
  }

  for (const char of normalizedStrB) {
    charMapB[char] = (charMapB[char] || 0) + 1;
  }

  // Compare chars in frequency map
  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}
