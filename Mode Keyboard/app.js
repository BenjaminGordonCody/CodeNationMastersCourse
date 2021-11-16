const AudioContext = window.AudioContext;
const audioContext = new AudioContext();

const keymap = {
  q: 0,
  w: 1,
  e: 2,
  r: 3,
  t: 4,
  y: 5,
  u: 6,
  i: 7,
};

let piano = {
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
  },
};

let startButton = document.createElement("button");
startButton.addEventListener("click", piano.init);
document.body.append(startButton);

window.addEventListener("keydown", () => {
  piano.keys.gain.gain.value = 1;
});

window.addEventListener("keyup", () => {
  piano.keys.gain.gain.value = 0;
});

// // TODO
// generate keys in for loop, major only
// play keys using keymap
// add reverb
// style css into grid
// have grid respond to keypress (maybe make array of divs?)
// can i be modal?
