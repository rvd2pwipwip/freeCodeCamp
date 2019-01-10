// my solution:
function repeatStringNumTimes(str, num) {
  return num <= 0 ? "" : `${str}${repeatStringNumTimes(str, --num)}`;
}

// // fcc solution with repeat:
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str.repeat(num) : '';
// }

console.log(repeatStringNumTimes("abc", 3));
