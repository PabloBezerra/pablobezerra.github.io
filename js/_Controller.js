import { server, view } from "./app.js";

export class Controller{
    constructor(){
        
    }

    async start(dom){
        if(await server.start()){
            view.printRedes(dom, server.getDados('rede'))
        }
        
    }
}