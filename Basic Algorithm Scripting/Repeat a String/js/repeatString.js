function repeatStringNumTimes(str, num) {
  return num <= 0 ? "" : `${str}${repeatStringNumTimes(str, --num)}`;
}

console.log(repeatStringNumTimes("abc", 3));
