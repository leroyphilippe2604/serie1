// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class dog extends Animal{
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = 'Whaouf';
    }

    class cat extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Miaou";
    }

    let namedog = new dog('Spiky');
    let namecat = new cat('fifille');

    document.getElementById("run").addEventListener('click', () =>{
        console.log(namedog.sayHello());
        console.log(namecat.sayHello());
    })

})();
