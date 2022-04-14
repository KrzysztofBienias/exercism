// Helper funcitons
const COUNT = (val) => {
  if (val == 0) return 'No more bottles';
  if (val == 1) return '1 bottle';
  
  return `${val} bottles`;
} 


const LEFT = (val) => {
  if (val == 0) return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
  if (val == 1) return 'Take it down and pass it around, no more bottles of beer on the wall.';

  return `Take one down and pass it around, ${COUNT(val - 1)} of beer on the wall.`
}



// Main one
export const recite = (count, left) => {

  let result = [];

  for (left > 0; left--;) {

    result.push(`${COUNT(count)} of beer on the wall, ${COUNT(count).toLowerCase()} of beer.`);
    result.push(`${LEFT(count)}`);
    
    count--;
    
    if (left > 0) result.push('');
  }

  return result;
};