// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

const day = document.getElementById("dod-day");
const month = document.getElementById("dod-month");
const year = document.getElementById("dod-yers");
const run = document.getElementById("run");

run.addEventListener("click", function () {
  let birthday = new Date(
    parseInt(year.value),
    parseInt(month.value) - 1,
    parseInt(day.value).gettime()
  );
  console.log(birthday);
  let now = new Date().gettime();
  let agetime = now - birthday;
  let age = new Date(agetime).getFullYear() - 1970;
  alert(`your age is ${age}`);
});
