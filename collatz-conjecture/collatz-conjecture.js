//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  if (num <= 0) {
    throw Error('Only positive numbers are allowed');
  }

  var numOfSteps = 0;
  var result = num;
  while (result !== 1) {
    if (result % 2 == 0) {
      result = result / 2;
    } else {
      result = result * 3 + 1;
    }
    numOfSteps++;
  }
  return numOfSteps;
};