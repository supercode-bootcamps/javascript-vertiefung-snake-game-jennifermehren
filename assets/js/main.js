let snakeField = document.querySelector("#snakeField");
let button = document.querySelector("button");
let item;
let counter = 0;
let myCounter = document.createElement("p");

document.querySelector("header").appendChild(myCounter);
myCounter.innerText = counter + " von 10 Punkten ";

for (let i = 0; i < 100; i++) {
  item = document.createElement("div");
  snakeField.appendChild(item).classList.add("item");
}
let allItems = document.querySelectorAll(".item");

button.addEventListener("click", () => {
  setInterval(function () {
    if (counter < 10) {
      let numberOfItem = Math.floor(Math.random() * 100);
      allItems[numberOfItem].style.backgroundColor = "red";
      setTimeout(function () {
        allItems[numberOfItem].style.backgroundColor = "";
      }, 600);
    }
  }, 400);
});

allItems.forEach((itm) => {
  itm.addEventListener("mouseover", (e) => {
    color = itm.style.backgroundColor;

    if (color == "red") {
      counter++;
      myCounter.innerText = counter + " von 10 Punkten ";
      if (counter == 10) {
        myCounter.innerText = "10 Punkte erreicht, Spiel zu Ende";
      }
    }

    e.target.style.backgroundColor = "orange";

    setTimeout(function () {
      itm.style.backgroundColor = "";
    }, 1000);
  });
});
