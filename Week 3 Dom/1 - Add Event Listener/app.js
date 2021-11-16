let header = document.getElementById("heading");

let colorSwitch = () => {
  color = header.style.color;
  if (color !== "red") {
    header.style.color = "red";
  } else {
    header.style.color = "green";
  }
};

header.addEventListener("click", colorSwitch);
