"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tablero_1 = require("./src/state/tablero");
const input_keyboard_1 = require("./src/input/input-keyboard");
const tablero_render_1 = require("./src/render/tablero-render");
const pawn_1 = require("./src/classes/pawn/pawn");
let peon1 = new pawn_1.Pawn(1, 0);
let peon2 = new pawn_1.Pawn(1, 1);
let peon3 = new pawn_1.Pawn(1, 2);
let peon4 = new pawn_1.Pawn(1, 3);
let peon5 = new pawn_1.Pawn(1, 4);
let peon6 = new pawn_1.Pawn(1, 5);
let peon7 = new pawn_1.Pawn(1, 6);
let peon8 = new pawn_1.Pawn(1, 7);
let Bpeon1 = new pawn_1.Pawn(6, 0, true);
let Bpeon2 = new pawn_1.Pawn(6, 1, true);
let Bpeon3 = new pawn_1.Pawn(6, 2, true);
let Bpeon4 = new pawn_1.Pawn(6, 3, true);
let Bpeon5 = new pawn_1.Pawn(6, 4, true);
let Bpeon6 = new pawn_1.Pawn(6, 5, true);
let Bpeon7 = new pawn_1.Pawn(6, 6, true);
let Bpeon8 = new pawn_1.Pawn(6, 7, true);
let whitePawns = [peon1, peon2, peon3, peon4, peon5, peon6, peon7, peon8,];
let blackPawns = [Bpeon1, Bpeon2, Bpeon3, Bpeon4, Bpeon5, Bpeon6, Bpeon7, Bpeon8];
(0, tablero_1.agregarPiezas)(whitePawns);
(0, tablero_1.agregarPiezas)(blackPawns);
(0, tablero_render_1.renderizarTablero)();
(0, input_keyboard_1.userInput)();
