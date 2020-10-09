// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
  const target = document.getElementById("target");

  let now = new Date();
  let date = now.toLocaleString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    jour: "numeric",
    minute: "numeric",
    hourcycle: "h24",
  });

  target.innerHTML = date;
})();
