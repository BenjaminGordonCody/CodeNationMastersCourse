const list = document.getElementsByTagName("li");
console.log(list);

let red = 255;
let blue = 0;
green = 0;

for (let i = 0; i < list.length; i++) {
  console.log(i);
  list[i].style.backgroundColor = `rgb(${red}, 0, ${blue})`;
  red = red - 255 / list.length;
  blue = blue + 155 / list.length;
  green = green + 255 / list.length;
}

//selecting even nth elements from list
const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems);
console.log(listItems.length);
for (let index = 0; index < listItems.length; index++) {
  listItems[index].style.backgroundColor = "green";
}

?