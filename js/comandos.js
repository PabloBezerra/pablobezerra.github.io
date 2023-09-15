// Edita o comportamento do container que revela os cards de projetos por area.
function mostrarCards(n, condição=true){
    switch (n){
        case 1:
            if (albumGames.className === 'album'){
                albumGames.className = 'revelar';
                albumBusiness.className = 'album';
                albumExtras.className = 'album';
            }else{
                albumGames.className = 'album';
            }
            break;
        case 2: 
            if (albumBusiness.className === 'album'){
                albumGames.className= 'album';
                albumBusiness.className = 'revelar';
                albumExtras.className = 'album';
            }else{
                albumBusiness.className = 'album';
            }
            break;
        case 3: 
            if (albumExtras.className === 'album'){
                albumGames.className = 'album';
                albumBusiness.className = 'album';
                albumExtras.className = 'revelar';
            }else{
                albumExtras.className = 'album';
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

let atualizador = setInterval(carrossel, 10000);

function passar(n) {
    if (n === 1){
        cont --;
    }else{
        cont ++;
    }
    carrossel(false);
}