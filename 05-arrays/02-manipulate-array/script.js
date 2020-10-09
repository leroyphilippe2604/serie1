// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  const run = document.getElementById("run");

  run.addEventListener("click", function () {
    fruits.pop();
    fruits.shift();
    fruits.unshift("banana");
    fruits.push("kiwi");
    alert(fruits);
  });
})();
