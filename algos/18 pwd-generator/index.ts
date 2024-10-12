// --- Directions
// Write a program that generates a random password
// containing letters, numbers, and symbols based on
// user input. The program should ask the user how many
// letters, numbers, and symbols they want in the password.
// The generated password should contain the specified number
// of each type of character in random order.
// --- Example
//   Input: 4 letters, 2 symbols, 3 numbers
//   Output: a password like "d2@Bf4$a9"
// --- Steps
// 1. Prompt the user for how many letters, symbols, and numbers
//    should be included in the password.
// 2. Randomly select the requested number of letters, symbols,
//    and numbers.
// 3. Combine the characters and shuffle them to ensure randomness.
// 4. Output the final randomized password.

import * as readline from 'node:readline';

// Create an interface to handle input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate randomCharacters
const generateRandomCharacters = (count: number, charSet: string[]): string[] =>
  Array.from({ length: count }, () => charSet[Math.floor(Math.random() * charSet.length)]);

// Function to Shuffle Array
const shuffleArray = <T>(array: T[]): T[] =>
  array.reduceRight((shuffled, current) => {
    const randomIndex = Math.floor(Math.random() * (shuffled.length + 1));
    return [...shuffled.slice(0, randomIndex), current, ...shuffled.slice(randomIndex)];
  }, [] as T[]);

// Function to generate password
const passwordGenerator = (lettersCount: number, symbolsCount: number, numbersCount: number): string => {
  const letters: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const symbols: string[] = '!#$%&()*+'.split('');
  const numbers: string[] = '0123456789'.split('');

  // Generate random characters for each type
  const passwordLetters: string[] = generateRandomCharacters(lettersCount, letters);
  const passwordSymbols: string[] = generateRandomCharacters(symbolsCount, symbols);
  const passwordNumbers: string[] = generateRandomCharacters(numbersCount, numbers);

  const passwordList: string[] = [...passwordLetters, ...passwordNumbers, ...passwordSymbols];
  console.log('passwordList', passwordList);
  const shuffledPasswordList = shuffleArray(passwordList);
  console.log('shuffledPasswordList', shuffledPasswordList);

  return shuffledPasswordList.join('');
};

// Ask for the user input
rl.question('How many letters would you like in your password?\n', (nrLetters: string) => {
  rl.question('How many symbols would you like?\n', (nrSymbols: string) => {
    rl.question('How many numbers would you like?\n', (nrNumbers: string) => {
      const lettersCount: number = parseInt(nrLetters);
      const symbolsCount: number = parseInt(nrSymbols);
      const numbersCount: number = parseInt(nrNumbers);

      // Generate the password using the user input
      const password = passwordGenerator(lettersCount, symbolsCount, numbersCount);

      console.log('Your generated Password is: ', password);

      // Close the readline interface
      rl.close();
    });
  });
});
