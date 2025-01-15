import { server, view } from "./app.js";

export class Controller{
    constructor(){
    }

    async start(inicializar){
        if(await server.start()){
            view.printRedes(inicializar[0] , server.getDados('redes'))
            view.printRedes(inicializar[3] , server.getDados('redes'))
            view.printHabilidades(inicializar[1], server.getDados('habilidades'))
        }
        
    }
}