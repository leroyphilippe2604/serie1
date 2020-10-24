//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    
    let temp = {};

    document.getElementById('run').addEventListener('click', function(){
        for(objet of computers){
            Object.assign(temp, defaultProps); // on copie colle defaultprops dans temp
            Object.assign(temp, objet); //on ecrase les object de computer avec defaultprops
            Object.assign(objet, temp);// on ecrase avec les les object de computer quand c est possible
        }
        console.log(computers);
    })
})();
