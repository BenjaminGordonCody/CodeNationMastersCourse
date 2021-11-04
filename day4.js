// ARRAYS

const warmup1 = (num1, num2) => {
  return num1 ** num2;
};

const demonstrateMap = () => {
  array = [1, 2, 3, 4, 5];
  map = array.map((x) => x ** x);
  console.log(map);
};

// console.log(warmup1(2, 3));
// demonstrateMap();
// demonstrateShift();

function demonstrateShift() {
  let squad = ["Letitia", "Cathletta de Borgia", "Solarnum Hathersage", "Tim"];
  while (typeof (i = squad.shift()) !== "undefined") {
    console.log(i);
  }
  console.log(squad);
}

/* 
OTHER METHODS:
splice(start, n, additions)
    changes a string in place.
    starts changing from 'start'
    deletes n elements (n is optional)
    adds in additions (adds is optional)
    returns array of removed elements

slice(start, end)
    returns a shallow copy of array between start/end
    if start = 0, end = 6, slice returns array[0] - array [5]

shift()
    removes first element of list
    returns that element
    useful for a queue?
*/

//LOOPS
const loops1 = () => {
  let favFilms = [
    "Up",
    "Run Lola Run",
    "Zombie Boy",
    "Grey Gardens",
    "The Seventh Seal",
  ];
  favFilms.push("Gremlins", "Gremlins 2");
  for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
  }
};

const loops2 = () => {
  for (let i = 0; i < 6; i++) {
    let rand = Math.random();
    rand = rand * 50;
    console.log(rand);
  }
};

const loops3 = () => {
  for (let i = 9; i > -1; i--) {
    console.log(i);
  }
};

const loops4 = () => {
  const filmCheck = (array) => {
    if (array[2] == "Ghostbusters") {
      return "yay, ghostbusters";
    } else {
      return "boo, we want ghostbusters";
    }
  };

  let favFilms = ["Up", "Run Lola Run", "Zombie Boy", "Grey Gardens"];
  for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
  }
  console.log(filmCheck(favFilms));
};

const loops5 = () => {
  nums = [];
  for (let i = 0; i < 6; i++) {
    nums.push(Math.random());
    nums[i] = Math.round(nums[i] * 30);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 7 == 0) {
      console.log(`${nums[i]} is divisible by 7`);
    } else {
      console.log(`${nums[i]} is not divisible by 7`);
    }
  }
};

// do-while executes before evaluating condition
const loops6 = () => {
  let i = false;
  while (i) {
    console.log("while loop executed");
  }
  do {
    console.log("do while loop executed");
  } while (i);
};

const loops7 = () => {
  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < 20; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

// loops1();
// loops2();
// loops3();
// loops4();
// loops5();
// loops6();
// loops7();
