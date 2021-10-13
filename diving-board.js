// What are the possible lengths of a diving board using N pieces of board
// where each piece can either be long (length=X) or short (length=Y)

// Long planks will always be longer than short ones X > Y

// eg. N=6 X=3 Y=2

const divingBoard = (n, x, y) => {
  const lengths = [];

  for (let i = 0; i < n; i++) {
    const l = n - i;
    lengths.push(i * y + (n - i) * l * x);
  }

  return lengths;
}

console.log(divingBoard(6, 3, 2));
