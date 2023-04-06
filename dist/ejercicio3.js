"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contarVocales = void 0;
function contarVocales(cadena) {
    const vocales = "aeiou";
    let contador = 0;
    for (const letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
exports.contarVocales = contarVocales;
const entrada = 'esto es una prueba de codigo';
const resultado = contarVocales(entrada);
console.log(`Se encontraron ${resultado} vocales`);
//# sourceMappingURL=ejercicio3.js.map