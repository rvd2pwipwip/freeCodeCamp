function findElement(arr, func) {
  return arr.find(func);
}

// // old fashion way:
// function findElement(arr, func) {
//   let num = 0;

//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }

//   return undefined;
// }

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 9], function(num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 3, 5, 8, 9, 10], function(num) {
    return num % 2 === 0;
  })
);
