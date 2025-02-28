import { agregarPiezas, tablero as Tablero } from "./src/state/tablero"

import { userInput } from "./src/input/input-keyboard"

import {Piece} from "./src/classes/piece"

import {renderizarTablero} from './src/render/tablero-render'
import { Pawn } from "./src/classes/pawn/pawn"


let peon1 = new Pawn(1,0)
let peon2 = new Pawn(1,1)
let peon3 = new Pawn(1,2)
let peon4 = new Pawn(1,3)
let peon5 = new Pawn(1,4)
let peon6 = new Pawn(1,5)
let peon7 = new Pawn(1,6)
let peon8 = new Pawn(1,7)

let Bpeon1 = new Pawn(6,0,true)
let Bpeon2 = new Pawn(6,1,true)
let Bpeon3 = new Pawn(6,2,true)
let Bpeon4 = new Pawn(6,3,true)
let Bpeon5 = new Pawn(6,4,true)
let Bpeon6 = new Pawn(6,5,true)
let Bpeon7 = new Pawn(6,6,true)
let Bpeon8 = new Pawn(6,7,true)



let whitePawns = [peon1,peon2,peon3,peon4,peon5,peon6,peon7,peon8,]

let blackPawns = [Bpeon1,Bpeon2,Bpeon3,Bpeon4,Bpeon5,Bpeon6,Bpeon7,Bpeon8]



agregarPiezas(whitePawns)

agregarPiezas(blackPawns)


renderizarTablero()

userInput()



