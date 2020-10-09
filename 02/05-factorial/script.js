(() => {
  // to get the value of an input: document.getElementById("element-id").value
  const input = document.getElementById("number");
  document.getElementById("run").addEventListener("click", () => {
    let factorial = 1;
    for (let i = 1; i <= input.value; i++) {
      factorial *= i;
    }
    alert(factorial);
  });
})();
