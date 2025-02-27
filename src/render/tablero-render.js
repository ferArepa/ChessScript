"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderizarTablero = void 0;
const tablero_1 = require("../state/tablero");
const renderizarTablero = () => {
    tablero_1.tablero.forEach((subArray) => {
        let horizontalLine = subArray.join("  ");
        console.log(horizontalLine);
    });
};
exports.renderizarTablero = renderizarTablero;
