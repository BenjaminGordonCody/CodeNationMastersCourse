const { ModuleMocker } = require("jest-mock");
const { toInteger } = require("lodash");

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
module.exports = {
  add,
  notNull,
  isTrue,
  twoProps,
  numToString,
  returnPlanet,
  countStudents,
  sqrDigits,
};
