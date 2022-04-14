export const isIsogram = (str) => {
  if (str.length == 0) return true;

  let old1 = str.toLowerCase().match(/[a-z]/gi); 
  let new1 = [...new Set(old1)];

  return (old1.length == new1.length)
};
