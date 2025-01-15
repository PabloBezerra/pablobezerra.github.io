import { View } from "./_View.js";
import { Controller } from "./_Controller.js";
import { Server } from "./_Server.js";

const inicio = document.querySelector('#inicio')
const footer = document.querySelector('#footer')
const habilidades = document.querySelector('#habilidades')
const projetos = document.querySelector('#projetos')

export const server = new Server()
export const controller = new Controller()
export const view = new View()

//debugger

const inicializar = [
    inicio.querySelector('#icones'),
    habilidades.querySelector("#hab"),
    projetos,
    footer.querySelector("#icones")
]

controller.start(inicializar)