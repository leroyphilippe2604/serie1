// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", function () {
    // perform an addition
    let add = new Number(
      +document.getElementById(`op-one`).value +
        +document.getElementById(`op-two`).value
    );
    alert(`${add}`);
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
      let nega = new Number(
        document.getElementById(`op-one`).value -
          document.getElementById(`op-two`).value
      );
      alert(`${nega}`);
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
      let multi = new Number(
        document.getElementById(`op-one`).value *
          document.getElementById(`op-two`).value
      );
      alert(`${multi}`);
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
    let div = new Number(
      document.getElementById(`op-one`).value /
        document.getElementById(`op-two`).value
    );
    alert(`${div}`);
  });
})();
