// Challenge 1

const printMessage = () => {
  console.log("Hello Code Nation");
};

const repeatFunc = (func, number) => {
  for (let i = 0; i < number; i++) {
    func();
  }
};
repeatFunc(printMessage, 5);

// Challenge 2

const add = (a, b) => {
  return a + b;
};

const iterativeSum = (a, b, add) => {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    total += add(a, b);
  }
  console.log(total);
};

iterativeSum(0.5, 0.5, add);

// Challenge 3
let array = [1, 2, 3, 4, 5];
let triple = (num) => {
  return num * 3;
};
array = array.map(triple);
console.log(array);

// Challenge 4
const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const subtract = (a, b) => {
  return a - b;
};

const doMath = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

let example = doMath(5);
console.log(example(5, multiply));

let mathsResult = doMath(4);
let nextResult = mathsResult(5, subtract);

console.log(nextResult);
