function titleCase(str) {
  return str
    .split(" ")
    .map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
