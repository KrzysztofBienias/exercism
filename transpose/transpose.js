//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input = []) => {
  let output = Array(Math.max(0, ...input.map(v => v.length))).fill('');

  input.forEach((str, idx) => {
    for (let i in str) {
      while (output[i].length < idx) output[i] += " ";
      output[i] += str[i];
    }
  })

  return output;
};
