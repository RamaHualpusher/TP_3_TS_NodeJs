"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVillano = void 0;
function getVillano(nombre, edad, arma = "pistola") {
    let mensaje;
    if (edad) {
        mensaje = `${nombre} tiene una edad de: ${edad} y arma: ${arma}`;
    }
    else {
        mensaje = `${nombre} tiene un ${edad}`;
    }
    return mensaje;
}
exports.getVillano = getVillano;
console.log(getVillano('Joker', 35));
console.log(getVillano('Harley Quinn', undefined, 'bate'));
//# sourceMappingURL=ejercicio2.js.map