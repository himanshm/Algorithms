import * as readlineSync from 'readline-sync';

interface Bids {
  [name: string]: number;
}

const clearScreen = (): void => {
  console.clear();
};

const findHighestBidder = (bidData: Bids): void => {
  let winner = '';
  let highestBid = 0;

  for (const [bidder, bidAmount] of Object.entries(bidData)) {
    if (bidAmount > highestBid) {
      highestBid = bidAmount;
      winner = bidder;
    }
  }

  console.log(`The winner is ${winner} with the highest bid of $${highestBid}`);
};

const bids: Bids = {};
let continueBidding = true;

while (continueBidding) {
  const name = readlineSync.question('What is your name? ');
  const price = parseInt(readlineSync.question('What is your bid?: $'), 10);

  if (isNaN(price)) {
    console.log('Invalid Bid! Please enter a valid number.');
    continue;
  }

  bids[name] = price;

  let shouldContinue = '';

  while (true) {
    shouldContinue = readlineSync
      .question('Are there other users who want to bid? Type "yes" or "no":\n')
      .toLowerCase();

    if (shouldContinue === 'yes' || shouldContinue === 'no') break;
    console.log('Invalid Input! Please enter "yes" or "no".');
  }

  if (shouldContinue === 'no') {
    continueBidding = false;
    findHighestBidder(bids);
  } else {
    clearScreen();
  }
}
