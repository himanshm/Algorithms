import * as readLineSync from 'readline-sync';

const EASY_LEVEL_TURNS = 10;
const HARD_LEVEL_TURNS = 5;

// Function to check the user's guess against the actual answer
const compareGuess = (guess: number, answer: number, turns: number): number => {
  if (guess < answer) {
    console.log('Too Low!');
    return turns - 1;
  } else if (guess > answer) {
    console.log('Too High!');
    return turns - 1;
  } else {
    console.log(`You guessed it right! The correct answer is ${answer}`);
    return -1; // Correct Guess
  }
};

// Function to set difficulty level with input validation
const setDifficulty = (): number => {
  while (true) {
    const chosenDifficulty = readLineSync.question("Choose a difficulty. Type 'easy' or 'hard': ").toLowerCase();
    if (chosenDifficulty === 'easy') {
      return EASY_LEVEL_TURNS;
    } else if (chosenDifficulty === 'hard') {
      return HARD_LEVEL_TURNS;
    } else {
      console.log("Invalid input. Please type 'easy' or 'hard'.");
    }
  }
};

// Function to get a validated user guess
const getValidGuess = (): number => {
  while (true) {
    const input = readLineSync.question('Make a guess: ');
    const guess = parseInt(input, 10);
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      return guess;
    } else {
      console.log('Invalid input. Please enter a number between 1 and 100.');
    }
  }
};

// Main game function
const game = (): void => {
  console.log('Welcome to the Number Guessing Game!');
  console.log("I'm thinking of a number between 1 and 100.");

  const turns = setDifficulty();
  const chosenNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Pssst! The correct answer is ${chosenNumber}`); // For debugging purposes

  let remainingTurns = turns;
  while (remainingTurns > 0) {
    console.log(`You have ${remainingTurns} attempts remaining to guess the number.`);
    const userGuess = getValidGuess();
    remainingTurns = compareGuess(userGuess, chosenNumber, remainingTurns);

    if (remainingTurns === -1) {
      return; // User guessed correctly
    }

    if (remainingTurns === 0) {
      console.log(`You've run out of guesses! The number was ${chosenNumber}. You lose!`);
    }
  }
};

game();
