// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const numbers = document.getElementById(`numbers`);

  document.getElementById("run").addEventListener("click", () => {
    // your code here

    let nbrArray = numbers.nodeValue.split(",");
    nbrArray.sort((a, b) => a - b);
    console.log(nbrArray);
  });
})();
