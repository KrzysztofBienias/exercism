const validate = (num, inBase, outBase) => {
  if (inBase < 2) throw ('Wrong input base');
  if (outBase < 2) throw ('Wrong output base');
  if (!num) throw ('Input has wrong format');
  if (num.length < 1) throw ('Input has wrong format');
  if (num.length > 1 && !num[0]) throw ('Input has wrong format');
  if (num.some((v) => v < 0 || v >= inBase)) throw ('Input has wrong format');
}

const getValue = (num, inBase) => num
  .reduce((acc, curr, i) => acc + curr * inBase ** (num.length - 1 - i), 0);



export const convert = (num, inBase, outBase) => {
  validate(num, inBase, outBase);

  const value = getValue(num, inBase);
  const result = [];

  for (let order = 0; value / outBase ** order >= 1; order++) {
    result.push(Math.floor(value / outBase ** order) % outBase)
  }

  result.reverse();

  return result.length > 0 ? result : [0];
};
