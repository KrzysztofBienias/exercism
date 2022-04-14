// const addRows = (triangle) => {
//   let previousRow = triangle[triangle.length - 1];
//   let newRow = [1];

//   for (let i = 0; i < previousRow.length - 1; i++) {
//     let current = previousRow[i];
//     let next = previousRow[i + 1];

//     newRow.push(current + next);
//   }

//   newRow.push(1);
//   return triangle.push(newRow);
// }

const addRows = (triangle) => {
  let previousRow = triangle[triangle.length - 1];
  let newRow = [1];

  for (let i = 0; i < previousRow.length - 1; i++) {
    let current = previousRow[i];
    let next = previousRow[i + 1];

    newRow.push(current + next);
  }

  newRow.push(1);
  return triangle.push(newRow);
}



export const rows = (numRows) => {

  let triangle = [[1], [1, 1]];
  
  if (numRows == 0) return [];
  else if (numRows == 1) return [triangle[0]];
  else if (numRows == 2) return triangle;
  else {
    for (let i = 2; i < numRows; i++) {
      addRows(triangle);
    }
  }
  
  return triangle;
};
