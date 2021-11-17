//sugar
let print = (what, where) => {
  document.getElementById(where).innerHTML = what;
};

// background styling

// print keypress details
let printKeyPress = (keypress) => {
  print(keypress.code, "code");
  print(keypress.key, "key");
  print(keypress.which, "which");
};

// event listener
let body = document.getElementsByTagName("body");
body[0].addEventListener("keypress", printKeyPress);
