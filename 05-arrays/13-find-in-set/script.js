// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    const run = document.getElementById('run');

    run.addEventListener('click', () =>{
        
        console.log(people.size);
        // people.delete("Alexandre");  

        if (people.has ("Alexandre")) {
            console.log('Alexandre is part of the Set.');
            
        } else {
            console.log('Alexandre is not part of the Set.');
        }
    })
    
})();
