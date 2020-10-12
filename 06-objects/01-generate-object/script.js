// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    let moi = {
        lastname : "Leroy",
        firstname : "Philippe",
        age : 26,
        city : "Merbes-le-chateau",
        country : "Belgium",
        
        identite : function(){
            return 'Nom : ' + this.lastname +
                    '\n Prenom : ' + this.firstname +
                    '\n age : ' + this.age +
                    '\n city : ' + this.city +
                    '\n country : ' + this.country;
        }

    }

    const run = document.getElementById('run');
    run.addEventListener('click', () =>{
        console.log(moi.identite())
    })
})();
