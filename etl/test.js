// let obj = {
//   1: ['A', 'E'],
//   2: ['D', 'G']
// }

// let result = {
//   a: 1,
// };

// Object.assign(result, { e: 1})

// console.log(result);


const old = {
  1: ['A', 'E'],
  2: ['D', 'G'] 
};

const expected = {};

old.map((v, i) => {
  expected[v] = old[0];
})