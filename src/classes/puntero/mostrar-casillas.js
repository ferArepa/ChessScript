"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarCasillas = void 0;
const mostrarCasillas = (piezaEnCasilla) => {
    if (piezaEnCasilla === "□") {
        return undefined;
    }
    if (piezaEnCasilla === "♟") {
        return "pawn";
    }
};
exports.mostrarCasillas = mostrarCasillas;
