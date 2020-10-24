// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    const run = document.getElementById('run');

    async function printpersonn (getpersonn){
        try {
            const persons = await getpersonn();
            console.log(persons);
        }
        catch {
            console.log('could not fetch the data');
        }
    }

    run.addEventListener('click', () =>{
        printpersonn(lib.getpersonn)
    })
})();
