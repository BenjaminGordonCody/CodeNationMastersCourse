/*
A constructor for a pet

TODO
refactor feels/consequence so food and health happens in a more sensible


- add health feels
- add happiness
- add happiness setter
- add happiness consequences for other events
- add play
- play consequences/feels
- implement death.
*/

// Shorthand functions to simplify writing
const print = (thing, id) => {
  document.getElementById(id).innerHTML = thing;
};

const append = (thing, id) => {
  document.getElementById(id).append(thing);
};

const clear = (id) => {
  print("", id);
};

const getButton = (text, onClick) => {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.onclick = onClick;
  return button;
};

const getPara = (string) => {
  let para = document.createElement("p");
  para.innerHTML = string;
  return para;
};

// Pet constructor, also contains all pet methods
const Pet = function (name, type, age, colour) {
  this.name = name;
  this.typeOfPet = type;
  this.age = age;
  this.colour = colour;
  this.nourished = 15;
  this.health = 100;

  //Prints pet's stats in full
  this.stats = () => {
    clear("stats");
    print(`Your pet's stats:\n`, "stats");
    for (const key in this) {
      if (typeof this[key] != "function") {
        let para = getPara(`${key}: ${this[key]}`);
        append(para, "stats");
      }
    }
  };

  this.getDigestiveFeels = () => {
    if (this.nourished < 10) {
      return "is starving.";
    }
    if (this.nourished > 30) {
      return "has overeaten.";
    } else {
      return "isn't hungry.";
    }
  };

  this.getHealthFeels = () => {
    if (this.health < 20) {
      return "is dying.";
    } else if (this.health < 50) {
      return "isn't well.";
    }
    return "feels fine";
  };

  this.digestiveConsequences = () => {
    if (this.nourished < 1) {
      this.health -= 10;
      return "is starving.";
    } else if (this.nourished > 35) {
      this.health -= this.nourished - 35;
      return "is vomiting.";
    }
    return "digestiveConsequences";
  };

  //processes all internal stats and outputs how pet is feeling
  this.feels = () => {
    let feels = [];

    // Get all pet's feelings first
    feels.push(this.getDigestiveFeels());
    feels.push(this.getHealthFeels());

    // print feelings to log
    for (const feel in feels) {
      let para = getPara(`${this.name} ${feels[feel]}`);
      append(para, "text");
    }
  };

  this.consequences = () => {
    let consequences = [];
    consequences.push(this.digestiveConsequences());
    for (const item in consequences) {
      let para = getPara(`${this.name} ${consequences[item]}`);
      append(para, "text");
    }
  };

  // Changes self.nourished and writes description of action to log.
  this.digest = (nutrition, verb) => {
    clear("text");
    this.nourished += nutrition;
    append(getPara(`${this.name} is ${verb}ing!`), "text");
    this.feels();
    this.consequences();
    this.stats();
  };
};

// birth Wiggles
const wiggles = new Pet("Wiggles", "pig", 21, "eau-de-nil");
wiggles.stats();
wiggles.feels();
wiggles.consequences();

// Interface for wiggles
const buttons = {
  food: () => {
    wiggles.digest(10, "eat");
  },
  drink: () => {
    wiggles.digest(1, "drink");
  },
};

for (let key in buttons) {
  let button = getButton(key, buttons[key]);
  append(button, "buttons");
}
