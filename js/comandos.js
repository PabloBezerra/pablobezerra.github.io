// Edita o comportamento do container que revela os cards de projetos por area.
function mostrarCards(n, condição=true){
    let iGames = document.getElementById('iGames');
    let iBusiness = document.getElementById('iBusiness');
    let iExtras = document.getElementById('iExtras');

    switch (n){
        case 1:
            if (Gamesalbum.className === 'album'){
                Gamesalbum.className = 'revelar';
                iGames.classList.add('rot')
                Businessalbum.className = 'album';
                iBusiness.classList.remove('rot')
                Extrasalbum.className = 'album';
                iExtras.classList.remove('rot')
            }else{
                Gamesalbum.className = 'album';
                iGames.classList.remove('rot')
            }
            break;
        case 2: 
            if (Businessalbum.className === 'album'){
                Gamesalbum.className= 'album';
                iGames.classList.remove('rot')
                Businessalbum.className = 'revelar';
                iBusiness.classList.add('rot')
                Extrasalbum.className = 'album';
                iExtras.classList.remove('rot')
            }else{
                Businessalbum.className = 'album';
                iBusiness.classList.remove('rot')
            }
            break;
        case 3: 
            if (Extrasalbum.className === 'album'){
                Gamesalbum.className = 'album';
                iGames.classList.remove('rot')
                Businessalbum.className = 'album';
                iBusiness.classList.remove('rot')
                Extrasalbum.className = 'revelar';
                iExtras.classList.add('rot')
            }else{
                Extrasalbum.className = 'album';
                iExtras.classList.remove('rot')
            }
            break;
    }
    if (condição){revelMenu()};
}

// Edita o comportamento do menu da barra de menu.
const revelMenu = () => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('visivel');
}

// Edita o comportamento do carrossel.
const car = document.getElementById('hab');
const divs = document.querySelectorAll('#hab > div');
let cont = -2; 
function carrossel(addcont=true){
    if (addcont){
        cont ++;
    }
    if(cont >= divs.length -2 ){
        cont = -2;
    }else if( cont < -2){
        cont = divs.length -2;
    }
    car.style.transform = `translateX(${-cont*290}px)`;
    console.log
}
function passar(n) {
    if (n === 1){
        cont --;
    }else{
        cont ++;
    }
    carrossel(false);
}
let atualizador = setInterval(carrossel, 10000);