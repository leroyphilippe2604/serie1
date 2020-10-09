// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

(() => {
  const text = document.getElementById("target");
  let time = new Date().getHours();

  console.log(time);

  if (time < 18) {
    text.innerHTML = "hello ! Good morning !";
  } else {
    text.innerHTML = "good evening";
  }
})();
