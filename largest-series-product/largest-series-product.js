export const largestProduct = (str, length) => {
  // Str smaller than length
  if (str.length < length) throw Error('Span must be smaller than string length');

  // Negative length
  if (length < 0) throw Error('Span must be greater than zero');

  // Empty string and 0 length
  if (str === '' || length == 0) return 1;

  // Determine zero in all lengths
  if (str[length - 1] == 0) return 0;

  // Invalid chars
  let regex = str.match(/[^0-9]/i);
  if (regex != null && regex.length == 1) throw Error('Digits input must only contain digits') 

  // Main code
  let arrOfSums = [];

  for (let i = 0; i < str.length - 1; i++) {
    let temp = str.slice(i, i + length).split('').reduce((a, b) => Number(a) * Number(b));

    arrOfSums.push(temp);
  }

  let largest = Math.max(...arrOfSums);

  return largest;
};
