// Cria os cards dos projetos.
const areas = ['Games', 'Business', 'Extras'];
const inserir = () => {
    for (let a in areas){
        const card = document.querySelectorAll(`#${areas[a]}album> .card`);
        ciarCards(6 - card.length, areas[a]);
    }
}
const ciarCards = (quantidade, local) => {
    for (let n = 0; n < quantidade; n++){

        const lugar = document.querySelector(`#${local}album`)
        let div = document.createElement("div");
        div.className = `card`;
        div.innerHTML = `
        <div>
        <img src="./arquivos/imagens/contrução.jpg" alt="Em breve">
        </div>
        <div id="info">
        <h3>Em Breve</h3>
        <p>Mais novidades em breve.</p>
        </div>
        `;
        lugar.appendChild(div);
    }
}
inserir();

// Edita o comportamento da barra de menu conforme o scroll da tela.
let barra = document.querySelector('#barra');
let menu = document.querySelector('#menu')
window.addEventListener('scroll', ()=> {
    barra.classList.toggle('novo',(window.scrollY > 60))
    menu.classList.remove('visivel', (window.scrollY > 60))
})



// Edita o comportamento da barra de navegação das redes sociais.
const ids = ['face', 'insta', 'twitter', 'linkedin', 'github'];
for(let i in ids){
    let id = document.querySelector(`#${ids[i]}`);
    id.addEventListener('mouseover', () => {
        id.src = `./arquivos/icones/icon_${ids[i]}_over.png`;
    })
    id.addEventListener('mouseout', () => {
        id.src = `./arquivos/icones/icon_${ids[i]}.png`;
    })
}