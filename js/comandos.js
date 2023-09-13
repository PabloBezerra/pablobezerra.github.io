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
    let menu = document.querySelector('#menu')
    menu.classList.toggle('visivel')
}
