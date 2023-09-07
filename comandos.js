function mostrarCards(n){
    switch (n){
        case 1:
            if (icardGames.style.display == 'none'){
                icardGames.style.display = 'flex';
                icardBusiness.style.display = 'none';
                icardExtras.style.display = 'none';
            }else{
                icardGames.style.display = 'none';
            }
            break;
            case 2: 
            if (icardBusiness.style.display == 'none'){
                icardGames.style.display = 'none';
                icardBusiness.style.display = 'flex';
                icardExtras.style.display = 'none';
            }else{
                icardBusiness.style.display = 'none';
            }
            break;
            case 3: 
            if (icardExtras.style.display == 'none'){
                icardGames.style.display = 'none';
                icardBusiness.style.display = 'none';
                icardExtras.style.display = 'flex';
            }else{
                icardExtras.style.display = 'none';
            }
            break;
    }
}

