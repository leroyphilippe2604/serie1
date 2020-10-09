// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {


  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const sum = document.getElementById('sum');
  const avg = document.getElementById('average');

  function rdm(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function nbrmin(arr){
    let minnbr = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minnbr) {
          minnbr = arr[i]
        }
    }
    return minnbr
  }

  function nbrmax(arr){
    let maxnbr = arr[0];
      for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxnbr) {
          maxnbr = arr[i]
        }
      }
    return maxnbr
  }

  function add(arr){
    let calculate = 0
      for (let i = 0; i < arr.length; i++) {
        calculate += arr[i];
      }
      return calculate
  }

  function average(arr){
    return add(arr) / arr.length;
  }

  function displaynum(){

    let random = [];

      for (let i = 0; i < 10; i++){
        random.push(rdm(1, 100));
      }
      for (let i = 0; i < random.length; i++){
        document.getElementById(`n-${i+1}`).innerHTML = random[i];
      }
      
      min.innerHTML = nbrmin(random);
      max.innerHTML = nbrmax(random);
      sum.innerHTML = add(random);
      avg.innerHTML = average(random);
  }



  document.getElementById('run').addEventListener('click',() => {
    displaynum()
  })

  


})();
