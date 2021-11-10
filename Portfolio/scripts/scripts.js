function addGenericPageElements() {
  let foreground = `
  <div id="topslash"></div>
  <div id="titleBar">
    <div id="title">
      <a href="index.html"><h1>B. Gordon-Cody</h1></a>
      <h2>Creative Programing and Narrative Data Science</h2>
    </div>
    <div id="burgerButtonBox"></div>
  </div>
  <div id="navbar">
    <a href="projects.html" id="link1" class="navLink">Projects</a>
      <a href="education.html" id="link2" class="navLink">Education</a>
      <div id="navbarspacer"></div>
      <a href="https://github.com/BenjaminGordonCody" id="link3" class="navLink">Github</a>
      <a href="contact.html" id="link5" class="navLink">Contact</a>
  </div>`;

  let background = `<div id="leftslash"></div>
      <div id="leftslashaccent"></div>`;

  document.getElementById("foregroundContainer").innerHTML = foreground;
  document.getElementById("backgroundContainer").innerHTML = background;
}
function addAnimation() {
  function wiggleTopTriangle(num) {
    let triangle = document.getElementById("topslash");
    triangle.style.width = num + "vw";
  }

  let title = document.getElementById("title");
  title.addEventListener("mouseover", () => {
    wiggleTopTriangle("75");
  });
  title.addEventListener("mouseleave", () => {
    wiggleTopTriangle("100");
  });
}
function addMenuForMobile() {
  const switchMenu = () => {
    let navbar = document.getElementById("navbar");
    console.log(navbar.style.display);

    if (navbar.style.display === "flex") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
      console.log("else");
    }
  };

  let button = document.createElement("button");
  button.style.background = "Portfolio/images/waves.png";
  button.id = "burgerButton";
  button.onclick = switchMenu;
  document.getElementById("burgerButtonBox").append(button);
}

addGenericPageElements();
addAnimation();
addMenuForMobile();
