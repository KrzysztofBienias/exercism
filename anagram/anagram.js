export const findAnagrams = (str, arr) => {

  let newStr = str.toLowerCase().split('').sort().join('');
  let newArr = arr.map(v => v.toLowerCase().split('').sort().join(''));

  let result = [];

  newArr.filter((v, i) => (v == newStr) ? result.push(arr[i]) : false);

  return result;
  
};