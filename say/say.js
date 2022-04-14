const NUMS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
},
  RANGE_ERROR = new Error("Number must be between 0 and 999,999,999,999.");

export class Say {
  inEnglish(num) {
    if (num < 0 || num > 999999999999) throw RANGE_ERROR;
    if (num === 0) return "zero";

    const BILLIONS = Math.floor(num / 1000000000),
      MILLIONS = Math.floor((num % 1000000000) / 1000000),
      THOUSANDS = Math.floor((num % 1000000) / 1000),
      HUNDREDS = Math.floor((num % 1000) / 100);

    const REMAINDER = num % 100,
      SINGLES = REMAINDER % 10,
      TENS = REMAINDER - SINGLES;

    let result = [];
    
    if (BILLIONS) result.push(`${this.inEnglish(BILLIONS)} billion`);
    if (MILLIONS) result.push(`${this.inEnglish(MILLIONS)} million`);
    if (THOUSANDS) result.push(`${this.inEnglish(THOUSANDS)} thousand`);
    if (HUNDREDS) result.push(`${this.inEnglish(HUNDREDS)} hundred`);
    if (REMAINDER)
      result.push(`${NUMS[REMAINDER] || `${NUMS[TENS]}-${NUMS[SINGLES]}`}`);

    return result.join(" ");
  }
}