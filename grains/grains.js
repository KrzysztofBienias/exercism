/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (val) => {
  if (val < 1 || val > 64) throw ('square must be between 1 and 64');

  return "" + (2n ** BigInt(val - 1))
};

export const total = () => 2n ** 64n - 1n;
