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





// running the programs
// ifStatements();
// equivalenceExample();
// orAndExample()
// switchExample();
gradeCheck()

