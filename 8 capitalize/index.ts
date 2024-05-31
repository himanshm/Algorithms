// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str: string): string {
  const words: string[] = [];

  for (let word of str.split(' ')) {
    console.log(words);
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

function capitalizeTwo(str: string): string {
  let result: string = str[0].toUpperCase();

  return result;
  ``;
}

console.log(capitalizeTwo('a short sentence'));
