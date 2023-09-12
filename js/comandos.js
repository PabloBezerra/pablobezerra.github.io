// Edita o comportamento do container que revela os cards de projetos por area.
function mostrarCards(n, condição=true){
    switch (n){
        case 1:
            if (albumGames.style.display === 'none'){
                albumGames.style.display = 'flex';
                albumBusiness.style.display = 'none';
                albumExtras.style.display = 'none';
            }else{
                albumGames.style.display = 'none';
            }
            break;
        case 2: 
            if (albumBusiness.style.display === 'none'){
                albumGames.style.display = 'none';
                albumBusiness.style.display = 'flex';
                albumExtras.style.display = 'none';
            }else{
                albumBusiness.style.display = 'none';
            }
            break;
        case 3: 
            if (albumExtras.style.display === 'none'){
                albumGames.style.display = 'none';
                albumBusiness.style.display = 'none';
                albumExtras.style.display = 'flex';
            }else{
                albumExtras.style.display = 'none';
            }
            break;
    }
    if (condição){revelMenu()};
}

// Edita o comportamento do menu da barra de menu.
const revelMenu = () => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('visivel')
}
