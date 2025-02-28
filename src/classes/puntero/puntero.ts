import { tablero as Tablero, tableroVirtual } from '../../state/tablero';
import { Pawn } from '../pawn/pawn';
import { Piece } from '../piece';


const tablaHash = new Map<string, number>();

tablaHash.set("up", -1)
tablaHash.set("down", 1)
tablaHash.set("left", -1)
tablaHash.set("right", 1)

type Puntero = {
    selected: boolean;
    look: string;
    posX: number;
    posY: number;


}
//  skins = ♘,♞,♖,█,☐,☵,⛘,⛆
const puntero: Puntero = {

    selected: false,
    look: "☐",
    posX: 3,
    posY: 3

}

let casillaGuardada: string = "□"
let piezaSelected: Pawn;
export const seleccionarPieza = (): void => {

    puntero.look = puntero.selected ? "☐" : "☑"
    Tablero[puntero.posX][puntero.posY] = puntero.look

    if (puntero.selected){ piezaSelected.ocultarMovimientos() }

    puntero.selected = !puntero.selected
    console.log(puntero.posX, puntero.posY)

    if(tableroVirtual[puntero.posX][puntero.posY] instanceof Pawn ){
        piezaSelected = tableroVirtual[puntero.posX][puntero.posY] as Pawn
        // (tableroVirtual[puntero.posX][puntero.posY] as Pawn).mostrarMovimientos()
    }

    return
}

// X va de arriba a abajo y Y va de izquierda a derecha


// la funcion salvar casilla verifica si la casilla
// a la que se quiere mover existe y devuelve el valor
// de lo que hay en esa casilla, si no existe no devuelve nada
const guardarCasilla = (movimiento: string): string | undefined => {

    let moveXY: number = tablaHash.get(movimiento) as number
    let casillaASalvar 

    if (movimiento === "up" || movimiento === "down") {
        
        if (!(puntero.posX + moveXY <= 7 && puntero.posX + moveXY >= 0)) {
            console.log("no slots in X (in vertical)")
            return undefined
        }

    }
    if (movimiento === "left" || movimiento === "right") {
        
        if (!(puntero.posY + moveXY <= 7 && puntero.posY + moveXY >= 0)) {
            console.log("no slots in Y (in horizontal)")
            return undefined
        }
    }

    if (movimiento === "left" || movimiento === "right") {

        casillaASalvar = Tablero[puntero.posX][puntero.posY + moveXY]
        return casillaASalvar
    }
    else if (movimiento === "up" || movimiento === "down") {

        casillaASalvar = Tablero[puntero.posX + moveXY][puntero.posY]
        return casillaASalvar
    }
}

export const moverPuntero = (movimiento: string): void => {

    let moveXY: number = tablaHash.get(movimiento) as number

    if (casillaGuardada )

    if(tableroVirtual[puntero.posX][puntero.posY] instanceof Pawn ){

        (tableroVirtual[puntero.posX][puntero.posY] as Pawn).ocultarMovimientos(puntero.selected)
    }

    



    if (movimiento === "up" || movimiento === "down") {

        if (guardarCasilla(movimiento) !== undefined) {


            // console.log(guardarCasilla(movimiento))
            // establecer la casilla donde estoy parado
            // con el valor de la casilla guardada
            Tablero[puntero.posX][puntero.posY] = casillaGuardada;

            casillaGuardada = guardarCasilla(movimiento)!

            puntero.posX += moveXY

            Tablero[puntero.posX][puntero.posY] = puntero.look

            if(tableroVirtual[puntero.posX][puntero.posY] instanceof Pawn ){

                (tableroVirtual[puntero.posX][puntero.posY] as Pawn).mostrarMovimientos(puntero.selected)
            }

        }
        console.log(puntero.posX, puntero.posY)

        return

    }
    else if (movimiento === "left" || movimiento === "right") {

        if (guardarCasilla(movimiento) !== undefined) {

            Tablero[puntero.posX][puntero.posY] = casillaGuardada;

            casillaGuardada = guardarCasilla(movimiento)!

            puntero.posY += moveXY

            Tablero[puntero.posX][puntero.posY] = puntero.look

            if(tableroVirtual[puntero.posX][puntero.posY] instanceof Pawn ){

                (tableroVirtual[puntero.posX][puntero.posY] as Pawn).mostrarMovimientos(puntero.selected)
            }
            // casillaGuardada = Tablero[puntero.posX][puntero.posY + moveXY];

        }
        console.log(puntero.posX, puntero.posY)

        return

    }
}



