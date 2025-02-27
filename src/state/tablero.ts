
import { Piece } from "../classes/piece"

// import { puntero } from "../classes/puntero/puntero"

export let tableroVirtual:Piece[][] | string[][] = [
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],

]



export let tablero:string[][] = [
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],
    ["□","□","□","□","□","□","□","□"],

]

// Recibe un array de Piezas y las agrega al Tablero
export const agregarPiezas = (piezas:Piece[]) => {


    piezas.forEach((pieza) => {
        

        // la posicion final es igual a 7 menos la posicion actual??
        let PosX = pieza.position.X;
        let PosY = pieza.position.Y;
        // let PosY = 7 - pieza.position.Y;
        tableroVirtual[PosX][PosY] = pieza;
        
        tablero[PosX][PosY] = pieza.look;
    })

}
