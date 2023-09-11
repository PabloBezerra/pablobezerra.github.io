function mostrarCards(n, condição=true){
    switch (n){
        case 1:
            if (albumGames.style.display === 'none'){
                albumGames.style.display = 'block';
                albumBusiness.style.display = 'none';
                albumExtras.style.display = 'none';
            }else{
                albumGames.style.display = 'none';
            }
            break;
            case 2: 
            if (albumBusiness.style.display === 'none'){
                albumGames.style.display = 'none';
                albumBusiness.style.display = 'block';
                albumExtras.style.display = 'none';
            }else{
                albumBusiness.style.display = 'none';
            }
            break;
            case 3: 
            if (albumExtras.style.display === 'none'){
                albumGames.style.display = 'none';
                albumBusiness.style.display = 'none';
                albumExtras.style.display = 'block';
            }else{
                albumExtras.style.display = 'none';
            }
            break;
    }
    if (condição){revelMenu()};
}

const revelMenu = () => {
    let menu = document.querySelector('#menu');
    let barra = document.querySelector('#barra');

    if (menu.style.display === 'none'){
        menu.style.display = 'block';
        if(barra.style.backgroundColor !== 'var(--anil)'){
            barra.style.backgroundColor = 'var(--anil)'
        }
        return;
    }
    menu.style.display = 'none';
    barra.style.backgroundColor = 'transparent'
}
