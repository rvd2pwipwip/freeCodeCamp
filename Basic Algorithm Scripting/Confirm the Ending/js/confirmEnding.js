function confirmEnding(str, target) {
  return target === str.slice(str.length - target.length);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "game"));
