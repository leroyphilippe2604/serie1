// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class person {
        constructor(firstname, lastname){
            this.firstname = firstname
            this.lastname = lastname
        }
        
        getname(){
            return `${this.firstname} ${this.lastname}`
        }
        setname(Fullname){
            this.firstname = Fullname.split(' ')[0]
            this.lastname = Fullname.split(' ')[1]
        }
    }
    
    document.getElementById('run').addEventListener('click', () =>{
        let moi = new person('Leroy', 'Philippe');
        console.log(moi.getname());
        moi.setname('Patrice Monier');
        console.log(moi.getname());
    })
})();
