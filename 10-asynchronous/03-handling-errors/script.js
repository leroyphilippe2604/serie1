// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    const run = document.getElementById('run');

    run.addEventListener('click', () =>{

        lib.getPersons((err, persons)=>{
            if(err){
                console.log('error could not fetch data');
            } else {
                console.log(persons);
            }
        })
    })
})();
