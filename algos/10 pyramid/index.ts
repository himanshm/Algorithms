// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n: number): void {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

function pyramidTwo(n: number, row = 0, level = ''): void {
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramidTwo(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add: string = '';

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add += '#';
  } else {
    add += ' ';
  }

  pyramidTwo(n, row, level + add);
}

pyramidTwo(3);
