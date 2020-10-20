// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    function rdm(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

const target = document.getElementById('target')
let text = target.innerHTML;
target.innerHTML = ' ';
let i = 0;

function typewriter() {
    if (i < text.length) {
        target.innerHTML += text[i];
        i++;
        setTimeout(typewriter, rdm(20, 60));
    }
}

})();
