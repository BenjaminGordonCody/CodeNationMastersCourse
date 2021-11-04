const print = (thing, id) => {
  document.getElementById(id).innerHTML = thing;
};

const append = (thing, id) => {
  document.getElementById(id).append(thing);
};

const clear = (id) => {
  print("", id);
};

const player = {
  name: "",
  health: 100,
  inventory: {},
};

const levelTemplate = {
  mainText: "This is the main body of the level",
  options: [
    {
      text: "This is option 1",
      consequences: () => {
        print("you pushed 1", "main");
      },
    },
    {
      text: "this is option 2",
      consequences: () => {
        print("you pushed 2", "main");
      },
    },
    {
      text: "this is option 3",
      consequences: () => {
        print("you pushed 3", "main");
      },
    },
  ],
};

const loadLevel = (level) => {
  print(level.mainText, "main");

  // get buttons
  for (let i = 0; i < level.options.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = level.options[i].text;
    button.onclick = level.options[i].consequences;
    append(button, "buttons");
  }

  //print stats
  print(`Health: ${player.health}\n`, "stats");
  append(`Inventory: ${player.inventory}`, "stats");
};

loadLevel(levelTemplate);
