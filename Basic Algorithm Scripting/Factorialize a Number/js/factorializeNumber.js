function factorialize(num) {
	if (num < 0) return;
	if (num === 0) return 1;
  return num * factorialize(num - 1);
}

//function factorialize(num) {
//	if (num > 0) {
//		let factor = 1;
//		while (num > 0) {
//		factor *= num;
//		num--;
//	}
//	return factor;
//	}
//}

console.log(factorialize(-5));
console.log(factorialize(5));