function hey_world() {    
    console.log("Hiya globe.");
}

// hey_world()

function demonstrateStringMethods() {
    let myString = "some lettters in a pattern";
    myString = myString.toUpperCase();
    console.log(myString);
    myString = myString.lastIndexOf("E");
    console.log(myString);
}

// demonstrateStringMethods();

function demonstrateRandom(){
    console.log(Math.floor(Math.random()*10))
}

// demonstrateRandom();

function printGrid(){
    let bars = "    |   |   ";
    let rows = "-------------";
    console.log(bars);
    console.log(bars);
    console.log(rows);
    console.log(bars);
    console.log(bars);
    console.log(rows);
    console.log(bars);
    console.log(bars);
}

// printGrid()

function print8thCharacter(){
    let myString = "All around the world"
    myString = myString.charAt(7)
    console.log(myString.toUpperCase()) 
}

// print8thCharacter()

function declareFaves(){
    let favColour = "Teal";
    let name = "Ben";
    let age = "34";

    myString = `My name is ${name}, I am ${age} years old. My favourite colour is ${favColour}`;
    console.log(myString)
}

// declareFaves()

function nameMeals (){
    
    function printMeals(meals){
        console.log(
            `For breakfast I'll have ${meals.breakfast}, ` +
            `for lunch I'll eat ${meals.lunch} and then for dinner ` +
            `I'll have ${meals.dinner}`);    
    }
    
    let meals ={
        "breakfast" : "eggs",
        "lunch" : "eggs",
        "dinner" : "eggs"
    };
       
    printMeals(meals);
    meals.breakfast = "jam"
    printMeals(meals)
}

// nameMeals();

function howOldInDays(){
    
}