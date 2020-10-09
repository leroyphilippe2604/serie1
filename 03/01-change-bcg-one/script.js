// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)
const body = document.body;
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");

red.addEventListener("click", function () {
  body.style.background = "red";
});

green.addEventListener("click", function () {
  body.style.background = "green";
});

yellow.addEventListener("click", function () {
  body.style.background = "yellow";
});

blue.addEventListener("click", function () {
  body.style.background = "blue";
});
