let a = 7;
let b = 9;
console.log('a, b :>> ', a, b);
a = a + b;
b = a - b;
a = a - b;
function arrAB(a, b) {
  return { b, a }
}

console.log('arrAB(7, 9) :>> ', arrAB(7, 9));
[a, b] = [b, a]
console.log('a, b :>> ', a, b);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10];
let dig;
arr.forEach((el, i) => { if (el !== i) dig = i });
console.log(dig)