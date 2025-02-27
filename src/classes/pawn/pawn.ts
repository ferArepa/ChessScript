import { renderizarTablero } from '../../render/tablero-render';
import { tablero } from '../../state/tablero';
import { Piece } from '../piece';



export class Pawn extends Piece {


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

    look: string;
    firstMove: boolean = true;
    constructor(starposX:number, startposY:number, black:boolean = false){
        super(starposX,startposY)

        this.look = black ? "♟":"♙" 

    }
    mostrarMovimientos(): void {
        
        if(this.firstMove){

            tablero[this.position.X - 1][this.position.Y] = "•"
            tablero[this.position.X - 2][this.position.Y] = "•"

        }
        else{
            tablero[this.position.X - 1][this.position.Y] = "•"
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


    verificarMovimiento(): void {
        

        

        

    }

    protected moverse(): void {
        
    }



}