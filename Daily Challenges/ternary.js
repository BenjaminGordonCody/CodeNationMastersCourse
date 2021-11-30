let boolVar = 3 < 23;

// If/else evaluation
const ifelse = (bool) => {
  if (bool == true) {
    return "it's true";
  } else {
    return "it's false";
  }
};

//Ternary operator evaluation
const ternary = (bool) => {
  return bool ? "it's true" : "it's false";
};

//Results of each function
console.log(`ifelse() says ${ifelse(boolVar)}`);
console.log(`ternary() says ${ternary(boolVar)}`);
