"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarPiezas = exports.tablero = exports.tableroVirtual = void 0;
// import { puntero } from "../classes/puntero/puntero"
exports.tableroVirtual = [
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
];
exports.tablero = [
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
    ["□", "□", "□", "□", "□", "□", "□", "□"],
];
// Recibe un array de Piezas y las agrega al Tablero
const agregarPiezas = (piezas) => {
    piezas.forEach((pieza) => {
        // la posicion final es igual a 7 menos la posicion actual??
        let PosX = pieza.position.X;
        let PosY = pieza.position.Y;
        // let PosY = 7 - pieza.position.Y;
        exports.tableroVirtual[PosX][PosY] = pieza;
        exports.tablero[PosX][PosY] = pieza.look;
    });
};
exports.agregarPiezas = agregarPiezas;
