//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (val) => {
  let result = '';

  if (val % 3 == 0) result += 'Pling';
  if (val % 5 == 0) result += 'Plang';
  if (val % 7 == 0) result += 'Plong';

  return result || String(val);
};
