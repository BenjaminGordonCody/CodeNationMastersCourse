//imports
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const levelsJSON = require("./levels.json");

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

// Define player and player functions
const player = {
  name: "",
  health: 100,
  inventory: {
    bread: 25,
  },

  //hurt acts as heal if fed negative number
  hurt: function (num) {
    this.health -= num;
  },

  //grab acts as drop if fed negative value
  grab: function (key, value) {
    if (typeof this.inventory[key] == "number") {
      this.inventory[key] += value;
    } else {
      this.inventory[key] = value;
    }
  },
};

//Load level on the screen
const loadLevel = (level) => {
  //Print text
  print(level.mainText, "main");

  // get buttons for each player choice
  clear("buttons");
  for (let i = 0; i < level.options.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = level.options[i].text;
    button.className = "choice";
    button.onclick = level.options[i].consequences;
    append(button, "buttons");
  }

  //print stats
  print(`Health: ${player.health}\n`, "player");

  //print inventory
  clear("inventory");
  for (let key in player.inventory) {
    let item = document.createElement("li");
    item.innerHTML = `${key}: ${player.inventory[key]}`;
    append(item, "inventory");
  }
};

//levels
const levelTemplate = {
  mainText: "This is the main body of the level",
  options: [
    {
      text: "Go to the room where you get injured",
      consequences: () => {
        loadLevel(levelInjured);
      },
    },

    {
      text: "Go to the room where you get an object",
      consequences: () => {
        loadLevel(levelInventory);
      },
    },

    {
      text: "Win!",
      consequences: () => {
        print("you pushed 3", "main");
      },
    },
  ],
};

const levelInjured = {
  mainText: "This is the room where you get injured",
  options: [
    {
      text: "Injure yourself 5, then go home",
      consequences: () => {
        player.hurt(5);
        loadLevel(levelTemplate);
      },
    },

    {
      text: "injure yourself 35, then go home",
      consequences: () => {
        player.hurt(35);
        loadLevel(levelTemplate);
      },
    },

    {
      text: "Injure yourself 50, then go home",
      consequences: () => {
        player.hurt(50);
        loadLevel(levelTemplate);
      },
    },

    {
      text: "Injure yourself 50, then go home",
      consequences: () => {
        player.hurt(50);
        loadLevel(levelTemplate);
      },
    },
  ],
};

const levelInventory = {
  mainText: "This is the room where you get a sandwhich",
  options: [
    {
      text: "Get more bread",
      consequences: () => {
        player.grab("bread", 20);
        loadLevel(levelTemplate);
      },
    },
    {
      text: "Get some butter",
      consequences: () => {
        player.grab("butter", 5);
        loadLevel(levelTemplate);
      },
    },
  ],
};

loadLevel(levelTemplate);

levels = {
    mainText: "",
    option1: {
        text: "",
        stats: {},
        inventory:{}
    },
    option2: {
        text: "",
        stats: {},
        inventory: {}
    }
    option
}
