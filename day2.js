function ifStatements() {
    let music = "classical";

    if (music == "classical") {
        console.log("classical");
    }

    else if (music == "no music") {
        console.log("silence");
    }

    else {
        console.log("other noise");
    }
}

function equivalenceExample() {
    if (1 == "1") {
        console.log("true");
    }
    else {
        console.log("false");
    }

    if (1 === "1") {
        console.log("truth");
    }
    else {
        console.log("false");
    }
}

function orAndExample() {
    let colour = "teal"
    if (colour == "red" || colour == "teal") {
        console.log("true")
    }
    if (colour == "red" && 1 === "1") {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

function switchExample() {
    // Switches aren't quicker than if statements, but might be prettier
    let car = "Ford";
    switch (car) {
        case "Ford":
        case "GM":
            console.log("American car");
            break;
        case "Peugeot":
        case "Citreon":
            "Un automobile fronsay";
            break;
        default:
            console.log("I don't know her");
            break;
    }
}

function gradeCheck() {
    const grade = 87;
    switch (true) {
        // Notice the key here is true, not grade
        // useful when there are multiple, unrelated conditionals
        // switch can also be false, if that's going to lead to prettier code.
        case grade >= 70:
            console.log("distinction");
            break;
        case grade >= 60:
            console.log("merit");
            break;
        case grade >= 50:
            console.log("pass");
            break;
        default:
            console.log("fail")
    }
}

function ageCheck() {
    let age = 18
    if (age >= 18) {
        console.log("here's your beer");
    }
    else {
        console.log("no beer for you");
    }
}

function ageAndCountryCheck() {
    let age = 12;
    let country = "US";
    switch (true) {
        case (country == "US" && age >= 21):
        case (country == "UK" && age >= 18):
        case (country == "Vietnam"):
            console.log("have a bev");
            break;

        default:
            console.log("no bev for you");
            break;
    }
}

function pizzaOpinions(topping) {
    switch (topping) {
        case "olives":
        case "anchovies":
        case "nduja":
            console.log("god tier pizza topping");
            break;
        case "red onion":
        case "passata":
            console.log("a fine pizza topping");
            break;
        case "cheddar":
        case "egg":
            console.log("this a pizza topping for monsters")
            break;
        default:
            console.log("This topping is one I don't think about");
            break;
    }
}

function pizzaOpinionsViaList(topping) {
    great = [
        "nduja",
        "anchovies",
        "olives"
    ]
    fine = [
        "red onion",
    ]
    sins = [
        "cheddar",
        "egg",
    ]

    switch (true) {
        case great.includes(topping):
            console.log("woo");
            break;
        case fine.includes(topping):
            console.log("fine");
            break;
        case sins.includes(topping):
            console.log("a bad pizza");
            break;
        default:
            console.log("I've never thought about it.")
    }
}

// ifStatements();
// equivalenceExample();
// orAndExample()
// switchExample();
// gradeCheck()
// ageCheck()
// ageAndCountryCheck()
// pizzaOpinionsViaList("egg")

// Challenge Set 1
function passwordLongEnough(string) {
    if (string.length >= 8) {
        console.log(string);
    }
    else {
        console.log("too short")
    }
}
// passwordLongEnough("1234567") // > too short
// passwordLongEnough("12345678") // > 12345678

function fizzBuzz(number) {
    switch (true) {
        case (number % 3 == 0 && number % 5 == 0):
            console.log("fizz buzz");
            break;
        case (number % 3 == 0):
            console.log("fizz")
            break;
        case (number % 5):
            console.log("buzz");
            break;
        default:
            console.log("break");
    }
}

// fizzBuzz(15)

function isPalindrome(string) {
    reverse = string.split("").reverse().join("");
    if (string == reverse) {
        console.log(`${string} is a palindrome`)
    }
    else {
        console.log(`${string} is not a palindrome`);
    }
}


// isPalindrome("red");
// isPalindrome("nun");

function whereAmIAt(time) {
    // I couldn't see what benefit there was to adding all the variables 
    // requested, so I didn't.
    switch (true) {
        case (time < 6 || time >= 22):
            console.log("in bed");
            break;
        case (time < 8):
            console.log("putting on my face");
            break;
        case (time < 9):
            console.log("commuting");
            break;
        case (time < 17):
            console.log("work")
            break;
        case (time < 18):
            console.log("commuting");
            break;
        case (time < 21):
            console.log("watching polka videos");
            break;
        default:
            console.log("eating strudel");
            break;
    }
}
// whereAmIAt(21);

function indexOfLastVowel(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let lastPosition = -1

    for (let vowel of vowels.values()) {
        if (string.lastIndexOf(vowel) > lastPosition) {
            lastPosition = string.lastIndexOf(vowel);
        }

    }
    console.log(`Final vowel is at position ${lastPosition}`);

}

// indexOfLastVowel(
//     "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// );

function firstIsLast(string) {
    let last = string.length - 1;
    if (string[0] == string[last]) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(firstIsLast("aab"))

// afternoon tasks
function ticTacToe(array) {
    // takes a 3x3 2d array, returns true if winning
    let win = false;

    //horizontal rows
    for (let row in array.values) {
        if (row[0] == row[1] && row[1] == row[2] && row[0] != "") {
            win = true;
        }
    }
    // vertical rows
    for (let i = 0; i < 3; i++) {
        if (
            array[0][i] == array[1][i] &&
            array[1][i] == array[2][i] &&
            array[0][i] != "") {
            win = true;
        }
    }
    //output result
    if (win == true) {
        console.log("winner");
    }
    else {
        console.log("no winner");
    }
}

// grid = [["o", "", "o"], ["x", "x", "o"], ["o", "x", ""]]
// ticTacToe(grid);

const pressGrindBeans = () => {
    console.log("grinding for 20 secs");
}

// pressGrindBeans();

const multiplyByNineFifths = (celsius) => {
    return celsius * (9 / 5);
}

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}

// console.log("The temperature is " + getFahrenheit(15) + "°F")


function coffeeOrder(size, type) {
    console.log(`a ${size} ${type}`);
};

coffeeOrder("large", "gin");

const anonCoffeeOrder = function (size, type) {
    console.log(`a ${size} ${type}`);
};
anonCoffeeOrder("large", "gin");

const arrowCoffeeOrder = (size, type) => {
    console.log(`a ${size} ${type}`);
};
arrowCoffeeOrder("large", "gin");
