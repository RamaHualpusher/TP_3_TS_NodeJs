"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularGanador = exports.Jugada = exports.Movimiento = void 0;
var Movimiento;
(function (Movimiento) {
    Movimiento[Movimiento["PIEDRA"] = 0] = "PIEDRA";
    Movimiento[Movimiento["PAPEL"] = 1] = "PAPEL";
    Movimiento[Movimiento["TIJERAS"] = 2] = "TIJERAS";
})(Movimiento = exports.Movimiento || (exports.Movimiento = {}));
class Jugada {
}
exports.Jugada = Jugada;
function calcularGanador(jugadas) {
    const resultados = [];
    for (const jugada of jugadas) {
        if (jugada.jugador1 === jugada.jugador2) {
            resultados.push("Empate");
        }
        else if ((jugada.jugador1 === Movimiento.PIEDRA && jugada.jugador2 === Movimiento.TIJERAS) ||
            (jugada.jugador1 === Movimiento.PAPEL && jugada.jugador2 === Movimiento.PIEDRA) ||
            (jugada.jugador1 === Movimiento.TIJERAS && jugada.jugador2 === Movimiento.PAPEL)) {
            resultados.push("Gana 1");
        }
        else {
            resultados.push("Gana 2");
        }
    }
    return resultados;
}
exports.calcularGanador = calcularGanador;
const jugadas = [
    { jugador1: Movimiento.PIEDRA, jugador2: Movimiento.PAPEL },
    { jugador1: Movimiento.PAPEL, jugador2: Movimiento.PAPEL },
    { jugador1: Movimiento.TIJERAS, jugador2: Movimiento.PIEDRA },
];
console.log(calcularGanador(jugadas));
//# sourceMappingURL=ejercicio4.js.map