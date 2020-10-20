// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    const target = document.getElementById('target');
    const inputs = document.querySelectorAll('.slot input');

    target.innerHTML = `0${inputs[0].value}-${inputs[1].value}.${inputs[2].value}.${inputs[3].value}`

    function random(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min )
    }

    function doubledigits(n) {
        n = parseInt(n);
        if (n <= 9) {
            return '0' + n;
        }
        return '' + n;
    }

    inputs.forEach((inputs) =>{
        inputs.parentElement.querySelector('button').addEventListener('click', () =>{
            inputs.value = random(parseInt(input.getAttribute('data-min')), parseInt(input.getAttribute('data-max')));
            target.innerHTML = `0${inputs[0].value}-${doubledigits(inputs[1].value)}.${doubledigits(inputs[2].value)}.${doubledigits(inputs[3].value)}`
        }
    )})  

})();
