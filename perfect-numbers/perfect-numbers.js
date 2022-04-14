export const classify = (num) => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');
  if (num == 1) return 'deficient';

  let divisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  let div = divisors.reduce((a, b) => a + b);

  if (div == num) return 'perfect';
  if (div > num) return 'abundant';
  if (div < num) return 'deficient';
  
  return divisors;
};
