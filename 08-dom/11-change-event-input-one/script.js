// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    const pass = document.getElementById('pass-one');
    const counter = document.getElementById('counter');
    let length = 10;
    pass.setAttribute('maxlength', length);
    counter.innerText = `${pass.value.length}/${length}`;

    pass.addEventListener('input', () => {
        counter.innerText = `${pass.value.length}/${length}`;
        count++;
    })

})();
