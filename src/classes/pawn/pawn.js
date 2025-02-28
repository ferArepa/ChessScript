"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const tablero_1 = require("../../state/tablero");
const piece_1 = require("../piece");
class Pawn extends piece_1.Piece {
    // si la propiedad depende de algo
    // que se pasa en el constructor
    // lo mejor es declarar la variable fuera
    // y luego asignarla en el constructor.
    // Osea si se necesita aplicar logica
    // antes de asignar el valor a la propiedad
    // es mejor crearla propiedad y luego asignarla en 
    // el constructor
    // pero si la propiedad es independiente de lo que se pasa
    // al constructor entonces es mejor crearla y asignar directamente el valor
    black;
    look;
    firstMove = true;
    constructor(starposX, startposY, black = false) {
        super(starposX, startposY);
        this.look = black ? "♟" : "♙";
        this.black = black;
    }
    mostrarMovimientos(notShowable = false) {
        if (notShowable) {
            return;
        }
        if (!this.black) {
            this.mostrarMovimientosWhite();
        }
        else {
            this.mostrarMovimientosBlack();
        }
        // antes de moverse el pointer debera de llamar al metodo
        // ocultar casillas 
        // este metodo sera llamado por el pointer 
        // si se encuentra encima de la pieza y es el turno del
        // jugador que tiene esa pieza
        // lo que hara sera verificar si es el primer movimiento
        // si lo es, desplegara 2 casillas hacia arriba cambiandoles
        // la apariencia sino solo 1, 
        // si el pointer selecciona la casilla donde esta el pawn,
        // ahora el pointer podra seleccionar una casilla a moverse
        // de las que muestra este metodo
    }
    ocultarMovimientos(holdear = false) {
        if (holdear) {
            return;
        }
        if (!this.black) {
            this.ocultarMovimientosWhite();
        }
        else {
            this.ocultarMovimientosBlack();
        }
    }
    verificarMovimiento() {
    }
    mostrarMovimientosWhite() {
        if (this.firstMove && !this.black) {
            tablero_1.tablero[this.position.X + 1][this.position.Y] = "•";
            tablero_1.tablero[this.position.X + 2][this.position.Y] = "•";
            return;
        }
        if (!this.firstMove && !this.black) {
            tablero_1.tablero[this.position.X + 1][this.position.Y] = "•";
            return;
        }
    }
    mostrarMovimientosBlack() {
        if (this.firstMove && this.black) {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "•";
            tablero_1.tablero[this.position.X - 2][this.position.Y] = "•";
            return;
        }
        if (this.firstMove && this.black) {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "•";
            return;
        }
    }
    ocultarMovimientosWhite() {
        if (this.firstMove && !this.black) {
            tablero_1.tablero[this.position.X + 1][this.position.Y] = "□";
            tablero_1.tablero[this.position.X + 2][this.position.Y] = "□";
            return;
        }
        if (!this.firstMove && !this.black) {
            tablero_1.tablero[this.position.X + 1][this.position.Y] = "□";
            return;
        }
    }
    ocultarMovimientosBlack() {
        if (this.firstMove && this.black) {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "□";
            tablero_1.tablero[this.position.X - 2][this.position.Y] = "□";
            return;
        }
        if (this.firstMove && this.black) {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "□";
            return;
        }
    }
    moverse() {
    }
}
exports.Pawn = Pawn;
