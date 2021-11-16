//define audio context
const AudioContext = window.AudioContext;
const audioContext = new AudioContext();

// make divs for keyboard keys
const makeDivKeys = (parentDivID, idPrefix) => {
  parent = document.getElementById(parentDivID);

  for (let i = 0; i < 8; i++) {
    let newdiv = document.createElement("div");
    newdiv.id = `${idPrefix}${i}`;
    newdiv.className = "pianoKey";
    parent.appendChild(newdiv);
  }
};

makeDivKeys("toprow", "top");
makeDivKeys("bottomrow", "bottom");

//put divs in array for easy referencing
let divArray = document.getElementsByClassName("pianoKey");

//array of colours to match the divs above
let colourArray = [
  "red",
  "yellow",
  "blue",
  "green",
  "purple",
  "cornflowerBlue",
  "darkOrchid",
  "darkSeaGreen",
  "yellow",
  "blue",
  "green",
  "purple",
  "cornflowerBlue",
  "darkOrchid",
  "darkSeaGreen",
  "red",
];

const keymap = {
  q: 0,
  w: 1,
  e: 2,
  r: 3,
  t: 4,
  y: 5,
  u: 6,
  i: 7,
  a: 8,
  s: 9,
  d: 10,
  f: 11,
  g: 12,
  h: 13,
  j: 14,
  k: 15,
};

let piano = {
  keys: [],
  _getKey: function (frequency) {
    // define new oscillator
    let oscillator = audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.start(0);

    //define new gain node
    let gain = audioContext.createGain();
    gain.gain.value = 0;

    //connect nodes together
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    //bundle into key object and return
    let key = {
      oscillator: oscillator,
      gain: gain,
    };
    return key;
  },

  init: function () {
    // piano.keys = piano._getKey(229);
    // console.log(piano.keys);

    for (let index = 0; index < 16; index++) {
      piano.keys[index] = piano._getKey(300 * (index + 1));
    }
  },
};

let startButton = document.createElement("button");
startButton.addEventListener("click", piano.init);
document.body.appendChild(startButton);

window.addEventListener("keydown", (event) => {
  key = keymap[event.key];
  piano.keys[key].gain.gain.value = 1;
  divArray[key].style.backgroundColor = colourArray[key];
});

window.addEventListener("keyup", (event) => {
  key = keymap[event.key];
  piano.keys[key].gain.gain.value = 0;
  divArray[key].style.backgroundColor = "white";
});

// // TODO
// generate keys in for loop, major only

// style css into grid
// have grid respond to keypress (maybe make array of divs?)
// can i be modal?
