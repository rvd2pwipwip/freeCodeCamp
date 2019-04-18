//function reverseString(str) {
//  let revStr = '';
//  let strArr = str.split('');
//  for (let i = strArr.length; i > 0; i--) {
//    revStr += strArr[i - 1];
//  }
//  return revStr;
//}

//the recursive way
//function reverseString(word) {
//	if (word.length === 0) return;
//	if (word.length === 1) return word;
//	if (word.length > 0) {
//		return word[word.length - 1] += reverseString(word.substring(0, word.length - 1))
//	}
//}

// function reverseString(str) {
//   return str.length === 0
//     ? ""
//     : str.length === 1
//     ? str
//     : (str[str.length - 1] += reverseString(str.substring(0, str.length - 1)));
// }

const reverseString = str => {
  return str.length === 0
    ? ""
    : str.length === 1
    ? str
    : (str[str.length - 1] += reverseString(str.substring(0, str.length - 1)));
};

// function reverseString(str) {
//   return !str.length
//     ? ""
//     : str.length === 1
//     ? str
//     : (str[str.length - 1] += reverseString(str.substring(0, str.length - 1)));
// }

// // fCC solution:
// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

console.log(reverseString("Greetings from Earth"));
