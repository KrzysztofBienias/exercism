//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let tempArr = str.split('');
  let letters = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else if (count === 1) {
      letters = [...letters, tempArr[i]];
    } else {
      let value = `${count}${tempArr[i]}`;
      count = 1;
      letters = [...letters, value];
    }
  }
  return letters.join('');
};

export const decode = (str) => {
  return str.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
}