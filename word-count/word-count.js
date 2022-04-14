export const countWords = (string) => {
  let resultObj = {};

  string.toLowerCase()
        .match(/\w+('\w+)?/g)
        .map(word => (resultObj[word] = resultObj[word] + 1 || 1))

  return resultObj;
};