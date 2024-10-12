// Write a program that calculates the compatibility score between two names based on the number of times certain letters occur.
// The program should check for the occurrence of the letters in the words "TRUE" and "LOVE" in both names and generate a final score
// 1. Take both people's names and check for the number of times the letters in the word TRUE occurs.

// 2. Then check for the number of times the letters in the word LOVE occurs.

// 3. Then combine these numbers to make a 2 digit number and print it out.

import * as readLine from 'node:readline';

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countCharsInWord = (word: string, name1: string, name2: string): number =>
  [...(name1 + name2).toLowerCase()].reduce(
    (count: number, char: string): number => (word.includes(char) ? count + 1 : count),
    0
  );

const loveCalc = (firstName: string, secondName: string): number => {
  const trueCount = countCharsInWord('true', firstName, secondName);
  const loveCount = countCharsInWord('love', firstName, secondName);

  return parseInt(`${trueCount}${loveCount}`);
};

rl.question('Enter First Name:\n', (firstName: string) => {
  rl.question('Enter Second Name:\n', (secondName: string) => {
    const loveScore = loveCalc(firstName, secondName);
    console.log(`Your Love Score is: ${loveScore}`);
  });
});
