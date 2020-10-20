// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    const pass = document.getElementById('pass-one');
    const validity = document.getElementById('validity');

    validity.innerHTML = 'IT s NOT OK';

    function checknums(value) {
        let reg = /\d.*\d/g;
        return reg.test(value);
    }

    pass.addEventListener('input', () =>{
        if(pass.value.length >= 8 && checknums(pass.value)){
            validity.innerHTML = 'ok';
        } else {
            validity.innerHTML = 'NOT OK';
        }
    })

})();
