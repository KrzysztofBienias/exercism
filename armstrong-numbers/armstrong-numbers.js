//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
// JSON.parse(JSON.stringify(myArray))

export const isArmstrongNumber = (num) => {
  var splitted = num.toString().split('');
  return splitted.map(val => val ** splitted.length).reduce((num1, num2) => num1 + num2) === num;
};
