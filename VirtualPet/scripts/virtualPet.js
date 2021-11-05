/*
A constructor for a pet

TODO
- define boundaries health/nutrition/happiness as globals near top of file
-change feels() funcs to to reference global variables at top
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
  this.happiness = 100;

  this.refresh = () => {
    this.output();
    this.stats();
  };

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

  this.output = () => {
    output = [this.getDigestiveFeels, this.getHealthFeels];

    for (let item in output) {
      output[item] = `${this.name} ${output[item]()}`;
      output[item] = getPara(output[item]);
      append(output[item], "text");
    }
  };

  this.getDigestiveFeels = () => {
    if (this.nourished < 10) {
      this.health -= 10;
      return "is starving.";
    }
    if (this.nourished > 50) {
      this.health -= this.nourished - 50;
      if (this.nourished > 60) {
        this.nourished -= 5;
        return "is vomiting.";
      } else {
        return "has overeaten";
      }
    }
    if (this.nourished > 40) {
      return "feels very full.";
    } else if (this.nourished < 20) {
      return "is hungry";
    } else {
      return "isn't hungry.";
    }
  };

  this.getHealthFeels = () => {
    if (this.health < 20) {
      return "is dying.";
    } else if (this.health < 50) {
      return "isn't well.";
    } else if (this.health > 70) {
      return "is physically spectacular";
    }
    return "is physically adequate";
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

  this.digest = (nutrition, verb) => {
    clear("text");
    this.nourished += nutrition;
    append(getPara(`${this.name} is ${verb}ing!`), "text");
    this.refresh();
  };
};

// birth Wiggles
const wiggles = new Pet("Wiggles", "pig", 21, "eau-de-nil");
wiggles.refresh();

// Interface for wiggles
const buttons = {
  food: () => {
    wiggles.digest(10, "eat");
  },
  drink: () => {
    wiggles.digest(1, "drink");
  },
  vomit: () => {
    wiggles.digest(-5, "vomit");
  },
};

for (let key in buttons) {
  let button = getButton(key, buttons[key]);
  append(button, "buttons");
}
