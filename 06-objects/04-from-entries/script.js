// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById('run').addEventListener('click', () =>{
        let skitty = [];
        
        for(let i = 0; i < keys.length; i++){
            skitty.push([keys[i], values[i]])
        }
        const object = Object.fromEntries(skitty);
        console.log(object)
    })
})();
