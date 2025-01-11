export class Server{
    constructor(){
        this.url = "./arquivos/dados.json"
        this.redes = []
        this.habilidades =[]
        this.projetos = []
    }

    async start(){
        const response = await fetch(this.url)
        if(response.status === 200){
            const data = await response.json()
            localStorage.setItem('dados', `${JSON.stringify(data)}`)
            console.log('foi')
            return true
        }else{location.reload(true)}
    }

    separaDados(){
        const data = localStorage.getItem('dados')
        if(data){
            const dados = JSON.parse(data)
            this.redes = dados[0]
            this.habilidades = dados[1]
            this.projetos = dados[2]
        }else{location.reload(true)}
    }

    getDados(info){
        console.log(this[info])
        return this[info]
    }
}