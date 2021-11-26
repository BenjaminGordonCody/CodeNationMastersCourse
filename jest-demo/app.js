const { toInteger, floor } = require("lodash");

// slide 1 challenges
const add = (a, b) => {
  return a + b;
};

function notNull() {
  return 1;
}

function isTrue() {
  return true;
}

function twoProps(val1, val2) {
  return {
    val1: val1,
    val2: val2,
  };
}

const onlyItemsOfnLength = (list) => {
  let output = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length >= 6) {
      output.push(list[i]);
    }
  }
  return output;
};

//slide 2 funcs
function numToString(int) {
  return String(int);
}

function returnPlanet(int) {
  planets = ["Mercury", "Venus", "Earth", "Mars", "etc"];
  return planets[int - 1];
}

function countStudents(register) {
  trueCnt = 0;
  for (const i in register) {
    if (register[i]) {
      trueCnt += 1;
    }
  }
  return trueCnt;
}

function sqrDigits(num) {
  num = String(num);
  num = num.split("");
  for (let i = 0; i < num.length; i++) {
    num[i] = toInteger(num[i]);
    num[i] = num[i] ** 2;
    num[i] = String(num[i]);
  }
  returnValue = "";
  for (let i = 0; i < num.length; i++) {
    returnValue = returnValue + num[i];
  }
  return toInteger(returnValue);
}

const centuryOf = (year) => {
  return floor(year / 100);
};

const binaryArrayToInt = (list) => {
  for (let i = 0; i < list.length; i++) {
    list[i] = String(list[i]);
  }
  list = list.join("");
  return parseInt(list, 2);
};

module.exports = {
  add,
  notNull,
  isTrue,
  twoProps,
  onlyItemsOfnLength,
  numToString,
  returnPlanet,
  countStudents,
  sqrDigits,
  centuryOf,
  binaryArrayToInt,
};
