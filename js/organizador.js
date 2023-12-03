(function(){

    const barra = document.querySelector('#barra')
    const menu = document.querySelector('#menu')
    const triangulo = document.querySelector('.triangulos')
    let limite = 0
    let altura = 0
    const ids = ['face', 'insta', 'twitter', 'linkedin', 'github']
    const cardHabilidades = [
        {
            nome: 'Python',
            descricao: 'É amplamente usada no desenvolvimento web, automação, análise de dados e muito mais.',
            img: './arquivos/icones/icon_python.png'
        },
        {
            nome: 'Html',
            descricao: '(Hypertext Markup Language) é a linguagem padrão para criar páginas da web',
            img: './arquivos/icones/icon_html.png'
        },
        {
            nome: 'Css',
            descricao: '(Cascading Style Sheets),é uma linguagem poderosa para personalizar a estética das páginas web.',
            img: './arquivos/icones/icon_css.png'
        },
        {
            nome: 'JavaScript',
            descricao: ' É uma linguagem de programação fundamental para o desenvolvimento web',
            img: './arquivos/icones/icon_js.png'
        },
        {
            nome: 'Em formação',
            descricao: 'React, Bootstrap, NodeJs, MySQL',
            img: './arquivos/icones/icon_atenção.png'
        }
    ]
    const cardsProjetos = [
        {   
            destino: 'Games',
            nome:'Jogo da Velha',
            descricao: 'O clássico jogo da velha feito em Python com PyQty6.',
            links:['https://github.com/PabloBezerra/Primeiro-game'],
            imagem: './arquivos/imagens/projeto_jogodavelha.jpg',
            alt: 'Projeto jogo da velha'
        },
        {
            destino: 'Business',
            nome:'Cartão Interativo',
            descricao: 'Desafio do Frontend Mentor de cartão de crédito interativo.',
            links:['https://github.com/PabloBezerra/Cartao_interativo', 'https://pablobezerra.github.io/Cartao_interativo/'],
            imagem: './arquivos/imagens/projeto_cartaoInterativo.jpg',
            alt: 'Projeto Cartão Interativo'
        },
        {
            destino: 'Business',
            nome:'Ecommerce Product Page',
            descricao: 'Desafio do Frontend Mentor de uma página de um produto comercial.',
            links:["https://github.com/PabloBezerra/Ecommerce-product-page", "https://pablobezerra.github.io/Ecommerce-product-page/" ],
            imagem: './arquivos/imagens/projeto_Ecommerce-page.jpg',
            alt: 'Projeto página de produto comercial'
        },
        {
            destino: 'Extras',
            nome:'LogOff',
            descricao: 'Agenda um desligamento ou reinicialização do windows, feito em Python com PyQty6.',
            links:["https://github.com/PabloBezerra/logoff" ],
            imagem: './arquivos/imagens/projeto_logoff.jpg',
            alt: 'Projeto LogOff'
        },
        {
            destino: 'Extras',
            nome:'Gerenciador de Tarefas',
            descricao: 'Desafio do Frontend Mentor de Gerenciador de Tarefas',
            links:["https://github.com/PabloBezerra/Gerenciador_tarefas", "https://pablobezerra.github.io/Gerenciador_tarefas/"],
            imagem: './arquivos/imagens/projeto_gerenciadordeTarefas.jpg',
            alt: 'Projeto Gerenciador de tarefas'
        }
    ]

    // Cria os cards das habilidades
    cardHabilidades.forEach(element =>{
        const div = document.createElement('div')

        const img = document.createElement('img')
        img.src = element.img
        img.alt = element.nome

        const p = document.createElement('p')
        p.innerHTML = `<em>${element.nome}</em> <br> ${element.descricao}`

        div.appendChild(img)
        div.appendChild(p)

        const amontoado = document.querySelector('.amontoado')
        amontoado.appendChild(div)
    })

    // Cria os cards dos projetos.
    cardsProjetos.forEach(element => {
        const divCard = document.createElement('div')
        divCard.classList.add('card')

        const img = document.createElement('img')
        img.src = element.imagem
        img.alt = element.alt

        const divInfo = document.createElement('div')
        divInfo.classList.add('info')

        const h3 = document.createElement('h3')
        h3.innerText = element.nome

        const p = document.createElement('p')
        p.innerText = element.descricao

        const divLink = document.createElement('div')
        divLink.classList.add('links')

        const a1 = document.createElement('a')
        a1.href = element.links[0]
        a1.target = '_blank'
        a1.innerText = 'Ver Código'

        divLink.appendChild(a1)
        if(element.links.length === 2){
            const a2 = document.createElement('a')
            a2.href = element.links[1]
            a2.target='_blank'
            a2.innerText = 'Ver Página'

            divLink.appendChild(a2)
        }

        divInfo.appendChild(h3)
        divInfo.appendChild(p)
        divInfo.appendChild(divLink)

        divCard.appendChild(img)
        divCard.appendChild(divInfo)

        const album = document.querySelector(`.${element.destino}`).lastElementChild
        album.appendChild(divCard)

    });

    // Configurações personalizado para cada tamanho de tela

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

    window.addEventListener('scroll', ()=> {
        barra.classList.toggle('novo',(window.scrollY > altura))
        menu.classList.remove('visivel', (window.scrollY > altura))
    })

    // Edita o comportamento da barra de navegação das redes sociais.

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

    for(let n = 0; n <= limite; n++){
        const span = document.createElement('span')
        span.style = `--i:${getRandomInt(1,30)}`
        triangulo.appendChild(span)
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
})()