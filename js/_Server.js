export class Server{
    constructor(){
        this.url = "./arquivos/dados.json"
        this.dados = {}
    }

    async start(){
        if(sessionStorage.getItem('dados') === null){
            const response = await fetch(this.url)
            if(response.status === 200){
                const data = await response.json()
                sessionStorage.setItem('dados', `${JSON.stringify(data)}`)
                this.recuperaDados()
            }else{location.reload(true)}
        }else{this.recuperaDados()}
        return true
    }

    recuperaDados(){
        this.dados = JSON.parse(sessionStorage.getItem('dados'))
    }

    getDados(info){
        if(this.dados[info]){
            return this.dados[info]
        }
    }
}