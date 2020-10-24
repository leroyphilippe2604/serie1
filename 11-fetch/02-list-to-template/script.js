

(() => {
    const run = document.getElementById('run');
    const target = document.getElementById('target');
    const template = document.getElementsByTagName('template')[0];

    run.addEventListener('click', ()=>{
        fetch('http://127.0.0.1:3000/heroes')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            displayinfo(data);
        })
    })

    function displayinfo(data){
        for (let i = 0; i < data.length; i++){
            let divHero = document.createElement('div');
            divHero.innerHTML = template.innerHTML;
            target.appendChild(divHero);
            divHero.querySelector('.name').innerHTML = data[i].name;
            divHero.querySelector('.alter-ego').innerHTML = data[i].alterego;
            divHero.querySelector('.powers').innerHTML = data[i].abilities;
        }
    }
})();
