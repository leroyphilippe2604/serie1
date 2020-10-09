// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)

(() => {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "kiwi",
    "banane",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  const run = document.getElementById("run");

  run.addEventListener("click", function () {
    fruits.forEach(function (i) {
      console.log(i);
    });
  });
})();
