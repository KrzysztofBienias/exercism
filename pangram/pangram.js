export const isPangram = (pangram) => {
  pangram = pangram.toLowerCase();
  let onlyLetters = pangram.replace(/[\W\d_]+/gi, '');
  let uniq = [...new Set(onlyLetters)].join('');
  
  return uniq.length == 26;
};