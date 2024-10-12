// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n: number): void {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

function stepsTwo(n: number, row = 0, stair = ''): void {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return stepsTwo(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  stepsTwo(n, row, stair + add);
}

stepsTwo(3);
