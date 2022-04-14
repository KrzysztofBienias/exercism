//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  if (word.length == 0) return 0;

  word = word.replace(/[aeioulnrst]/gi, '1 ');
  word = word.replace(/[dg]/gi, '2 ');
  word = word.replace(/[bcmp]/gi, '3 ');
  word = word.replace(/[fhvwy]/gi, '4 ');
  word = word.replace(/[k]/gi, '5 ');
  word = word.replace(/[jx]/gi, '8 ');
  word = word.replace(/[qz]/gi, '10 ');
  
  word = word.split(' ').map(Number).reduce((a, b) => a + b);

  return word;
};
