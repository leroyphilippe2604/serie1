// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    const next = document.getElementById('next');
    const image = document.querySelector('.material figure img');

    let pos = 1
    next.addEventListener('click', () =>{
        image.setAttribute('src', gallery[pos]);
            if (pos === gallery.length -1) {
                pos = 0;
           }else{
               pos++;
           }
    })

})();
