//es6 way with map (my solution):
//function findLongestWordLength(str) {
////	split str into words, map their lenghts and spread them into Math.max()
//	return Math.max(...str.split(' ').map(w => w.length));
//}

//es6 way with reduce:
// function findLongestWordLength(str) {
//   //	split str into words, map their lenghts and spread them into Math.max()
//   return str
//     .split(" ")
//     .reduce((longest, word) => Math.max(longest, word.length), 0);
// }

//for loop way:
// function findLongestWordLength(str) {
//   const words = str.split(" ");
//   let longest = 0;
//   for (let i = 0; i < words.length; i++) {
//     words[i].length > longest ? (longest = words[i].length) : longest;
//   }
//   return longest;
// }

//recursive way:
//slice vs splice http://www.tothenew.com/blog/javascript-splice-vs-slice/
function findLongestWordLength(str) {
  str = str.split(" ");
  if (str.length === 1) return str[0].length;
  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }
  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

console.log(findLongestWordLength("May the force be with you"));
