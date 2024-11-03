import * as readLineSync from 'readline-sync';

const add = (n1: number, n2: number): number => n1 + n2;

const subtract = (n1: number, n2: number): number => n1 - n2;

const multiply = (n1: number, n2: number): number => n1 * n2;

const divide = (n1: number, n2: number): number | null => {
  if (n2 === 0) {
    console.log('Error: Division by zero is not allowed.');
    return null;
  }
  return n1 / n2;
};

// Operations map
const operations: { [key: string]: (n1: number, n2: number) => number | null } = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

const clearScreen = (): void => {
  console.clear();
};

// Function to get valid numeric input
const getNumber = (prompt: string): number => {
  while (true) {
    const input = readLineSync.question(prompt);
    const number = parseFloat(input);
    if (!isNaN(number)) return number;
    console.log('Invalid input. Please input a valid number.');
  }
};

const calculator = (): void => {
  while (true) {
    let firstNumber = getNumber('What is the first number? :');

    while (true) {
      console.log(`Available Operations: ${Object.keys(operations).join(' ')}`);

      const operationSymbol = readLineSync.question('Pick an operation: ');
      const calculationFn = operations[operationSymbol];
      if (!calculationFn) {
        console.log('Invalid operation. Please choose a valid operator.');
        continue;
      }
      const secondNumber = getNumber('What is the second number? :');
      const answer = calculationFn(firstNumber, secondNumber);

      if (answer !== null) {
        console.log(`${firstNumber} ${operationSymbol} ${secondNumber} = ${answer}`);

        const choice = readLineSync
          .question(`Type 'y' to continue with ${answer}, 'n' for new calculation, or 'q' to quit: `)
          .toLowerCase();

        if (choice === 'y') {
          firstNumber = answer;
        } else if (choice === 'n') {
          clearScreen();
          break;
        } else if (choice === 'q') {
          console.log('Exiting the calculator. Goodbye!');
          return;
        } else {
          console.log('Invalid choice. Starting a new calculation.');
          clearScreen();
          break;
        }
      } else {
        break;
      }
    }
  }
};

calculator();
