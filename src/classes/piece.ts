
type pos = {

    X:number; 
    Y:number;


}

type pieceType = {

    pawn?:boolean
    bishop?:boolean
    queen?:boolean
    king?:boolean
    knight?:boolean
    rook?:boolean

}




// idealmente solo deberia de solicitarse en que posicion 
// se quiere instanciar la pieza y de que typo es



export class Piece {

    // pieceMoves:[] = []
    selected: boolean = false;
    look: string = "☒";
    // pieceType:pieceType
    position:pos = {

        X: 0,
        Y: 0,

    }
    constructor(startPosX:number, startPosY:number){

        this.position.X = startPosX
        this.position.Y = startPosY
       

    }
    mostrarMovimientos() {



    }
    verificarMovimiento(){

        let valid = true

        if (valid === true) {

            this.moverse()
        }

        //pasarle la informacion de donde se quiere mover
        // primero al verificardor y este evaluara si se puede mover
        // a esa casilla y llamara o no al metodo mover


    }

    protected moverse () {

        this.position.X += 1


    }


}