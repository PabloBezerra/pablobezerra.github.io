const ciarCards = (quantidade, local) => {
    for (let n = 0; n < quantidade; n++){

        const lugar = document.querySelector(`#album${local}`)
        let div = document.createElement("div")
        div.className = `card`
        div.innerHTML = `
        <div>
        <img src="./arquivos/contrução.jpg" alt="Em breve">
        </div>
        <div id="info">
        <h3>Em Breve</h3>
        <p>Mais novidades em breve.</p>
        </div>
        `;
        lugar.appendChild(div) 
    }
}

const areas = ['Games', 'Business', 'Extras']

const inserir = () => {
    for (let a in areas){
        const card = document.querySelectorAll(`#album${areas[a]}> .card`)
        ciarCards(6 - card.length, areas[a])
    }
}

inserir()