export class View{
    constructor(){
    }

    printRedes(dom , data){
        const ul = document.createElement('ul')
        data.forEach(el => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            const img = document.createElement('img')
            img.setAttribute('src', `./arquivos/icones/icon_${el.rede}.png`)
            img.setAttribute('id', `${el.rede}`)
            img.setAttribute('alt', `Perfil do ${el.rede}`)
            a.setAttribute('href', `${el.link}`)
            a.setAttribute('target','_blank')
            a.appendChild(img)
            li.appendChild(a)
            ul.appendChild(li)
        });
        dom.appendChild(ul)
    }

    printHabilidades(dom, data){
        data.forEach(el =>{
            const div = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')
            const em = document.createElement('em')
            const br = document.createElement('br')
            img.setAttribute('src', `./arquivos/icones/icon_${el.nome}.png`)
            img.setAttribute('alt',`${el.nome}`)
            em.innerText = `${el.nome}`
            p.appendChild(em)
            p.appendChild(br)
            p.innerText += `${el.descricao}`
            div.appendChild(img)
            div.appendChild(p)
            dom.appendChild(div)
        })
    }
}