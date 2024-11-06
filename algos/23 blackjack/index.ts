import * as readLineSync from 'readline-sync';

// Define card types and deck
const CARDS = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// Function to deal a random card
const drawCard = (): number => CARDS[Math.floor(Math.random() * CARDS.length)];
const handSum = (hand: number[]): number => hand.reduce((a, b) => a + b, 0);

// Calculate score with ace adjustment
const calculateScore = (hand: number[]): number => {
  let score = handSum(hand);
  if (score > 21 && hand.includes(11)) {
    hand[hand.indexOf(11)] = 1; // Change Ace from 11 to 1 if over 21
    score = handSum(hand);
  }
  return score;
};

// Check if hand is a blackjack
const isBlackjack = (hand: number[]): boolean => hand.length === 2 && calculateScore(hand) === 21;

const playBlackjack = (): void => {
  while (true) {
    const userHand = [drawCard(), drawCard()];
    const computerHand = [drawCard(), drawCard()];

    if (isBlackjack(userHand)) {
      console.log('You have Blackjack! You win!');
      continue;
    } else if (isBlackjack(computerHand)) {
      console.log('Dealer has Blackjack! You lose!');
      continue;
    }

    // Reveal initial cards
    console.log(`Your cards: ${userHand.join(', ')}, current score: ${calculateScore(userHand)}`);
    console.log(`Dealer's first card: ${computerHand[0]}`);

    // User's turn to draw the cards
    let userScore: number;
    while ((userScore = calculateScore(userHand)) < 21) {
      let draw: string;
      while (true) {
        draw = readLineSync.question("Type 'y' to draw another card, or 'n' to pass: ");
        if (draw === 'y' || draw === 'n') break; // Valid input
        console.log("Invalid input. Please type 'y' or 'n'.");
      }

      if (draw === 'y') {
        userHand.push(drawCard());
        console.log(`Your cards: ${userHand.join(', ')}, current score: ${calculateScore(userHand)}`);
      } else {
        break;
      }
    }
    if (userScore > 21) {
      console.log('You went over 21. You lose!');
      continue;
    }

    // Dealer's turn to draw the cards
    let computerScore: number;
    while ((computerScore = calculateScore(computerHand)) <= 16) {
      computerHand.push(drawCard());
    }

    // Show final hands and scores
    console.log(`Your final hand: ${userHand.join(', ')}, final score: ${userScore}`);
    console.log(`Dealer's final hand: ${computerHand.join(', ')}, final score: ${computerScore}`);

    // Determine the result
    if (computerScore > 21 || userScore > computerScore) {
      console.log('You win!');
    } else if (userScore < computerScore) {
      console.log('You lose!');
    } else {
      console.log('Draw!');
    }

    let playAgain: string;
    while (true) {
      playAgain = readLineSync.question("Play again? Type 'y' for yes, or 'n' for no: ").toLowerCase();
      if (playAgain === 'y' || playAgain === 'n') break; // Valid input
      console.log("Invalid input. Please type 'y' or 'n'.");
    }
    if (playAgain !== 'y') break;
    console.clear();
  }
};

playBlackjack();
