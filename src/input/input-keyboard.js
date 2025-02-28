"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInput = void 0;
const tablero_render_1 = require("../render/tablero-render");
const readline_1 = __importDefault(require("readline"));
const puntero_1 = require("../classes/puntero/puntero");
const userInput = async () => {
    // haciendo que el proceso reciba teclas en bruto
    // 
    process.stdin.setRawMode(true);
    process.stdin.resume();
    // const pepe = readline.
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // supongo que question es una funcion recibe como primer parametro un string
    // que es el mensaje a mostrar en consola, y un callback el cual se le pasa
    // al primer parametro la entrada del usuario
    console.log("ingrese su movimiento");
    // process.stdin.on recibe un evento y un callback
    // el evento keypress es el evento que se dispara cuando se presiona una tecla
    // y este recibe 2 parametros, el string de la tecla presionada y el objeto key
    // el objeto key tiene informacion adicional sobre la tecla presionada
    process.stdin.on("keypress", (entrada, key) => {
        // console.log("ingrese su movimiento")
        console.clear();
        console.log(key.name);
        if (key.name === "s") {
            // console.log("enter")
            (0, puntero_1.seleccionarPieza)();
        }
        if (key.name === "up") {
            console.log("arriba");
            (0, puntero_1.moverPuntero)(key.name);
        }
        if (key.name === "down") {
            console.log("abajo");
            (0, puntero_1.moverPuntero)(key.name);
        }
        if (key.name === "left") {
            console.log("iquierda");
            (0, puntero_1.moverPuntero)(key.name);
        }
        if (key.name === "right") {
            console.log("derecha");
            (0, puntero_1.moverPuntero)(key.name);
        }
        // (entrada === "\u001B[A")?  console.log("arriba") : 
        // (entrada === "\u001B[B")?  console.log("abajo") : 
        // (entrada === "\u001B[C")?  console.log("izquierda") :
        // (entrada === "\u001B[D")?  console.log("derecha"):console.log("no moviste")
        // if (entrada === "\u0003"){ rl.close() }
        // console.log(`moviste a: ${entrada}`)
        (0, tablero_render_1.renderizarTablero)();
    });
};
exports.userInput = userInput;
