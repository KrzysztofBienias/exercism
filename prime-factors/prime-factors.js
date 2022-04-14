//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let result = [];

  // Divisible by 2
  while (num % 2 === 0) {
    result.push(2);

    num = num / 2;
  }

  // Other divisors
  for (let i = 3; i <= Math.sqrt(num); i++){
    while (num % i === 0) {
      result.push(i);

      num = num / i;
    }
  };

  // Last dividing by 2
  if (num > 2) {
    result.push(num);
  }

  return result;
};
