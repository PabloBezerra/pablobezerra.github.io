function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var a = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    var bom = window.document.getElementById('bom')
    a.innerHTML = `Agora são ${hora} Horas e ${minutos} minutos`

    if(hora >= 5 && hora < 12 ){
        img.src = 'dia.png'
        document.body.style.background = '#005488'
        bom.innerText = 'Bom Dia!'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#cc7564'
        bom.innerText = 'Boa Tarde!'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#153045'
        bom.innerText = 'Boa Noite!'
    }
}