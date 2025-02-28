"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
// idealmente solo deberia de solicitarse en que posicion 
// se quiere instanciar la pieza y de que typo es
class Piece {
    // pieceMoves:[] = []
    selected = false;
    look = "☒";
    // pieceType:pieceType
    position = {
        X: 0,
        Y: 0,
    };
    constructor(startPosX, startPosY) {
        this.position.X = startPosX;
        this.position.Y = startPosY;
    }
    mostrarMovimientos() {
    }
    verificarMovimiento() {
        let valid = true;
        if (valid === true) {
            this.moverse();
        }
        //pasarle la informacion de donde se quiere mover
        // primero al verificardor y este evaluara si se puede mover
        // a esa casilla y llamara o no al metodo mover
    }
    moverse() {
        this.position.X += 1;
    }
}
exports.Piece = Piece;
