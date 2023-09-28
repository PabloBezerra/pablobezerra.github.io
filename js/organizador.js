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

// Configurações personalizado para cada tamanho de tela
let limite = 0
let altura = 0
if(window.innerWidth <= 767){
    limite = 25
    altura = 60
}else if (window.innerWidth >=767 && window.innerWidth < 992){
    limite = 40
    altura = 250
}else if (window.innerWidth >= 992){
    limite = 60
    altura = 250
}

// Edita o comportamento da barra de menu conforme o scroll da tela.
let barra = document.querySelector('#barra');
let menu = document.querySelector('#menu')

window.addEventListener('scroll', ()=> {
    barra.classList.toggle('novo',(window.scrollY > altura))
    menu.classList.remove('visivel', (window.scrollY > altura))
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

// Cria os triangulos para a animação de fundo
const triangulo = document.querySelector('.triangulos')

for(let n = 0; n <= limite; n++){
    let span = document.createElement('span')
    span.style = `--i:${getRandomInt(1,30)}`
    triangulo.appendChild(span)
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
