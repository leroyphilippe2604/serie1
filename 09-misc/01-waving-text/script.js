// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    const target = document.querySelector(`#target`);

    function rdm(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    arr = ['WHOOOOOO', 'HAAAAA', 'WHAOUUUU', 'YOUPIE']

    function addtext(n) {
        for (let i = 0; i < n; i++) {
            let tempotext = document.createElement('span');
            tempotext.innerHTML = arr[rdm(0, arr.length -1)]
            tempotext.style.fontSize = `${rdm(10, 100)}px`
            target.appendChild(tempotext);
        }
    }

    addtext(10);
})();
