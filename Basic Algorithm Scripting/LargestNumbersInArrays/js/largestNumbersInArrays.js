// es6 way (my solution):
function largestOfFour(arr) {
  return arr.map(sb => Math.max(...sb));
}

// // procedural approach:
// function largestOfFour(arr) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let max = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//         results[i] = max;
//       }
//     }
//   }
//   return results;
// }

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
