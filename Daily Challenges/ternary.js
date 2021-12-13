let boolVar = 3 > 23;

// If/else evaluation
const ifElseExample = (bool) => {
  if (bool == true) {
    return "it's true";
  } else {
    return "it's false";
  }
};

//Ternary operator evaluation
const ternaryExample = (bool) => {
  return bool ? "it's true" : "it's false";
};

//Results of each function
console.log(`ifElseExample() says ${ifElseExample(boolVar)}`);
console.log(`ternaryExample() says ${ternaryExample(boolVar)}`);
