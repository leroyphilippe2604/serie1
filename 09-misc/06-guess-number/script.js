// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    function random(min, max) {
        
        return Math.floor(Math.random() * (max - min +1) + min)
    }

    const x = random(1, 100);
    console.log(x)
    let guess = prompt('guess a number between 1 and 100');
    let count = 1;

    while (true) {
        if(parseInt(guess) === x) {
            alert(`WHAOU ! you got it ! The number is ${x} \n you needed ${count} guesses`)
            break
        } else {
            count++;
            if (guess > x) {
                guess = prompt('too high, try again');
            } else {
                guess = prompt('too low, try again');
            }
        }
    }

})();
