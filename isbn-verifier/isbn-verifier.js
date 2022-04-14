export const isValid = (isbn) => {
  // Matching only allowed chars and below empty array
  let cleaned = isbn.match(/[0-9x]/gi);
  let newArr = [];
  
  // Empty string or too short
  if (isbn.length == 0 || cleaned.length != 10) return false;

  // Replacing X -> 10, and checking if X is last
  cleaned.map((v, i, a) => (v == 'X' && a[a.length - 1] == 'X') ? a[i] = '10' : false);

  // Maping through array and multipling it
  cleaned.map((v, i, a) => {
    newArr.push(Number(v) * (a.length - i));
  })

  // Adding all nums
  let sum = newArr.reduce((a, b) => a + b);

  return sum % 11 == 0;
};
