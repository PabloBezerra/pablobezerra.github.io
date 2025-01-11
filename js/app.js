import { View } from "./_View.js";
import { Controller } from "./_Controller.js";
import { Server } from "./_Server.js";

export const server = new Server()
export const controller = new Controller()
export const view = new View()

const inicio = document.querySelector('#inicio')

controller.start(inicio.querySelector("#icones"))