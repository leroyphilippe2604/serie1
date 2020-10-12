// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    const run = document.getElementById('run');

    function rdm(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function rdmbird(){
        let bird = birds[rdm(0, birds.length - 1)];
        let arradj = [...adjectives];
        let adj = arradj[rdm(0, arradj.length - 1)];

        if (bird.fem) {
            return `la ${bird.name} ${adj}e`
        }else{
            return `le ${bird.name} ${adj}`
        };
    };

    run.addEventListener('click', () => {
        console.log(rdmbird())
    })
})();
