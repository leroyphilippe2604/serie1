// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
  const run = document.getElementById("run");
  const year = document.getElementById("year");

  function getspookyfridayin(yr) {
    let spookymonths = [];
    let monthname = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    for (let month = 0; month < 12; month++) {
      let d = new Date(yr, month, 13);
      if (d.getDay() == 5) {
        spookymonths.push(monthname[d.getMonth()]);
      }
    }
    return spookymonths;
  }

  run.addEventListener("click", function () {
    let yearInt = parseInt(year.value);
    alert(
      `ìn ${yearint}, Friday 13th happens in :${getspookyfridayin(yearint)}`
    );
  });
})();
