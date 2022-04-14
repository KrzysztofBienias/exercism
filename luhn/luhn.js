export const valid = (str) => {
  let num = [...str.replace(/[' ']/g, '')];

  if (num[0] == 0 && (num.length - 1) % 2 == 0) {
    num = num.slice(1, num.length)
  }

  if (num.length <= 1) return false;
  else {

    for (let i = 0; i < num.length; i += 2) {
      num[i] = Number(num[i]) * 2 > 9 ? Number(num[i]) * 2 - 9
                                      : Number(num[i]) * 2;
    }

    return num.reduce((a, b) => Number(a) + Number(b)) % 2 == 0;
  }
};