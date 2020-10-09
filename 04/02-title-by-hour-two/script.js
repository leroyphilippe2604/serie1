// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

(() => {
  const text = document.getElementById("target");
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  if (hour < 17 || (hour === 17 && minute < 30)) {
    text.innerHTML = "hello ";
  } else {
    text.innerHTML = "good evening !";
  }
})();
