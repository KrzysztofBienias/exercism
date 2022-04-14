export function triplets({ minFactor, maxFactor, sum }) {
  const min = minFactor || 1;
  const max = maxFactor || sum;
  const sumABC = sum;
  let tripletArray = [];

  for (let c = max; c >= min; c--) {
    for (let a = min; a <= max; a++) {
      let b = sumABC - (c + a);

      if (a > b) break;

      if (a**2 + b**2 === c**2) tripletArray.push(new Triplet(a, b, c));
    }
  }

  return tripletArray;
}

class Triplet {
  constructor(a, b, c) {
    this.abc = [a, b, c];
  }

  toArray() {
    return this.abc;
  }
}