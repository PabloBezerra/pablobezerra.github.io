(function () {
    const header = document.querySelector('header')
    const containers = document.querySelectorAll('.container')
    const form = document.querySelector("#form")
    const inputs = form.querySelectorAll('.required')
    const p = form.querySelectorAll('.p_required')
    let nome, email, mensagem = false

    // Edita o comportamento do container que revela os cards de projetos por area.



    // Edita o comportamento do menu da barra de menu.
    function revelMenu(){
        const menu = document.querySelector('#menu');
        menu.classList.toggle('visivel');
    }

    // Edita o comportamento do carrossel.


    // configurando o envio da mensagem do formulário


    function inserirErro(n){
      inputs[n].style.border = '2px solid darkred'
      p[n].style.display = 'block'
    }

    function removerErro(n){
      inputs[n].style.border = ''
      p[n].style.display = 'none'
    }

    function validarNome(){
      if(inputs[0].value.length <= 3 || /\d/.test(inputs[0].value)){
        inserirErro(0)
        nome  = false
      }else{
        removerErro(0)
        nome = true
      }
      ativarBotao()
    }

    function validarEmail(){
      if( !/\S+@\S+\.\S+/.test(inputs[1].value)){
        inserirErro(1)
        email = false
      }else{
        removerErro(1)
        email = true
      }
      ativarBotao()
    }

    function validarMensagem(){
      if (inputs[2].value.length <= 5){
        inserirErro(2)
        mensagem = false
      }else{
        removerErro(2)
        mensagem = true
      }
      ativarBotao()
    }

    function ativarBotao(){
      if(nome && email && mensagem){
        botao.disabled = false
      }else{
        botao.disabled = true
      }
    }
})()