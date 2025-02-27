import { tablero as Tablero } from "../state/tablero"



export const renderizarTablero = () => {

    Tablero.forEach((subArray:string[]) => {

        let horizontalLine = subArray.join("  ")
        
        console.log(horizontalLine)


    })

}