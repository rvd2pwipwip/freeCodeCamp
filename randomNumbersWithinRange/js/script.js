// Example
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function dieRoll(sides, bonus = 0) {
  return Math.floor(Math.random() * sides + 1 + bonus);
}

// Change these values to test your function
console.log(randomRange(5, 15));
console.log("roll: ", dieRoll(6));
