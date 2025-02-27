"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moverPuntero = void 0;
const tablero_1 = require("../../state/tablero");
const pawn_1 = require("../pawn/pawn");
const tablaHash = new Map();
tablaHash.set("up", -1);
tablaHash.set("down", 1);
tablaHash.set("left", -1);
tablaHash.set("right", 1);
//  skins = ♘,♞,♖,█
let puntero = {
    selected: false,
    look: " ",
    posX: 3,
    posY: 3
};
// X va de arriba a abajo y Y va de izquierda a derecha
// la funcion salvar casilla verifica si la casilla
// a la que se quiere mover existe y devuelve el valor
// de lo que hay en esa casilla, si no existe no devuelve nada
const guardarCasilla = (movimiento) => {
    let moveXY = tablaHash.get(movimiento);
    let casillaASalvar;
    if (movimiento === "up" || movimiento === "down") {
        if (!(puntero.posX + moveXY <= 7 && puntero.posX + moveXY >= 0)) {
            console.log("no slots in X (in vertical)");
            return undefined;
        }
    }
    if (movimiento === "left" || movimiento === "right") {
        if (!(puntero.posY + moveXY <= 7 && puntero.posY + moveXY >= 0)) {
            console.log("no slots in Y (in horizontal)");
            return undefined;
        }
    }
    if (movimiento === "left" || movimiento === "right") {
        casillaASalvar = tablero_1.tablero[puntero.posX][puntero.posY + moveXY];
        return casillaASalvar;
    }
    else if (movimiento === "up" || movimiento === "down") {
        casillaASalvar = tablero_1.tablero[puntero.posX + moveXY][puntero.posY];
        return casillaASalvar;
    }
};
let casillaGuardada = "□";
const moverPuntero = (movimiento) => {
    let moveXY = tablaHash.get(movimiento);
    if (tablero_1.tableroVirtual[puntero.posX][puntero.posY] instanceof pawn_1.Pawn) {
        tablero_1.tableroVirtual[puntero.posX][puntero.posY].mostrarMovimientos();
    }
    if (movimiento === "up" || movimiento === "down") {
        if (guardarCasilla(movimiento) !== undefined) {
            // console.log(guardarCasilla(movimiento))
            // establecer la casilla donde estoy parado
            // con el valor de la casilla guardada
            tablero_1.tablero[puntero.posX][puntero.posY] = casillaGuardada;
            casillaGuardada = guardarCasilla(movimiento);
            puntero.posX += moveXY;
            tablero_1.tablero[puntero.posX][puntero.posY] = puntero.look;
        }
        console.log(puntero.posX, puntero.posY);
        return;
    }
    else if (movimiento === "left" || movimiento === "right") {
        if (guardarCasilla(movimiento) !== undefined) {
            tablero_1.tablero[puntero.posX][puntero.posY] = casillaGuardada;
            casillaGuardada = guardarCasilla(movimiento);
            puntero.posY += moveXY;
            tablero_1.tablero[puntero.posX][puntero.posY] = puntero.look;
            // casillaGuardada = Tablero[puntero.posX][puntero.posY + moveXY];
        }
        console.log(puntero.posX, puntero.posY);
        return;
    }
};
exports.moverPuntero = moverPuntero;
