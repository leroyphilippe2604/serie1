// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {
    const passone = document.getElementById('pass-one');
    const passtwo = document.getElementById('pass-two');
    const run = document.getElementById('run');

    function checkpass (mdp1, mdp2) {
        if (mdp1.value === mdp2.value){
            greenbox(mdp1);
            greenbox(mdp2);
        }else{
            redbox(mdp1);
            redbox(mdp2);
        }
    }   

    function greenbox(box) {
        box.style.border = '20px solid green'
    }

    function redbox(box){
        box.style.border = '20px solid red'
    }

    run.addEventListener('click', () =>{
        checkpass(passone, passtwo)
    })


})();
