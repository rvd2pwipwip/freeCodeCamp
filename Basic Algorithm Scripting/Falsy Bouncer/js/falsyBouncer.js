// function bouncer(arr) {
//   return arr.filter(i => Boolean(i));
// }

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
