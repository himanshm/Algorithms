// Directions for Caesar Cipher Program:

// 1. Write a program that encrypts or decrypts a message using the Caesar cipher method.
// 2. The user inputs whether they want to 'encode' or 'decode' a message.
// 3. Ask the user for the message and the shift number.
// 4. The program shifts each letter of the message forward or backward based on the user's choice.
// 5. Non-alphabetic characters remain unchanged.
// 6. The result is printed out and the user is asked if they'd like to run it again.

import * as readlineSync from 'readline-sync';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetLength = alphabet.length;

type Action = 'encode' | 'decode';

const caesar = (originalText: string, shiftAmount: number, action: Action): string => {
  shiftAmount %= alphabetLength;
  if (action === 'decode') {
    shiftAmount *= -1;
  }

  const shiftedText = Array.from(originalText).map(char => {
    const lowerChar = char.toLowerCase();
    if (alphabet.includes(lowerChar)) {
      const newPosition = (alphabet.indexOf(lowerChar) + shiftAmount + alphabetLength) % alphabetLength; // JavaScript's modulo operation keeps the sign of the divisor
      return alphabet[newPosition];
    }
    return char;
  });

  return shiftedText.join('');
};

const startCipher = (): void => {
  while (true) {
    const action = readlineSync
      .question("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
      .toLowerCase() as Action;
    if (!['encode', 'decode'].includes(action)) {
      console.log("Invalid action! Please type 'encode' or 'decode'.");
      continue;
    }

    const text = readlineSync.question('Type your message: \n');
    const shift = Number(readlineSync.question('Type the shift number: \n'));

    const cipher = caesar(text, shift, action);
    console.log(`Here is the ${action}d result: ${cipher}`);

    const restart = readlineSync.question("Type 'yes' if you want to go again, otherwise type 'no'.\n").toLowerCase();
    if (restart === 'no') {
      console.log('Good Bye! See You soon!');
      break;
    }
  }
};

startCipher();
