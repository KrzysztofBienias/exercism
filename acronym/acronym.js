export const parse = (str) => {
  return str.split(/(?:-| |_)+/)
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase();
};