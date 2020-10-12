//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class personne {
        constructor(firstname, lastname){
            this.firstname = lastname;
            this.lastname = firstname;
        }
        sayHello(){
            return `Hello, ${this.firstname} ${this.lastname}`
        }
    }
    document.getElementById('run').addEventListener('click', () =>{
        let moi = new personne ('Leroy', 'Philippe');
        console.log(moi.sayHello());
    });

})();
