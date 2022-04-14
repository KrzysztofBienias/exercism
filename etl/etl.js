export const transform = (old) => {
  Object.entries(old).reduce((acc, [key, value]) => {
    value.forEach(letter => acc[letter.toLowerCase()] = +key);
    return acc;
  }, {})
};

// ne ume