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
    look;
    firstMove = true;
    constructor(starposX, startposY, black = false) {
        super(starposX, startposY);
        this.look = black ? "♟" : "♙";
    }
    mostrarMovimientos() {
        if (this.firstMove) {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "•";
            tablero_1.tablero[this.position.X - 2][this.position.Y] = "•";
        }
        else {
            tablero_1.tablero[this.position.X - 1][this.position.Y] = "•";
        }
        // este metodo sera llamado por el pointer 
        // si se encuentra encima de la pieza y es el turno del
        // jugador que tiene esa pieza
        // lo que ahra sera verificar si es el primer movimiento
        // si lo es, desplegara 2 casillas hacia arriba cambiandoles
        // la apariencia sino solo 1, 
        // si el pointer selecciona la casilla donde esta el pawn,
        // ahora el pointer podra seleccionar una casilla a moverse
        // de las que muestra este metodo
    }
    verificarMovimiento() {
    }
    moverse() {
    }
}
exports.Pawn = Pawn;
