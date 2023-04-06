"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ejercicio1_1 = require("./ejercicio1");
const ejercicio2_1 = require("./ejercicio2");
const ejercicio3_1 = require("./ejercicio3");
const ejercicio4_1 = require("./ejercicio4");
const ejercicio5_1 = require("./ejercicio5");
const ejercicio6_1 = require("./ejercicio6");
const ejercicio8_1 = require("./ejercicio8");
console.log("Ejercicio 1:");
console.log(`Resultado doble: ${(0, ejercicio1_1.resultadoDoble)(2, 2)}`);
console.log("\nEjercicio 2:");
console.log((0, ejercicio2_1.getVillano)("Dr. Malvado", 42));
console.log("\nEjercicio 3:");
console.log(`Vocales encontradas: ${(0, ejercicio3_1.contarVocales)("esto es una prueba de codigo")}`);
console.log("\nEjercicio 4:");
const jugadas = [
    { jugador1: ejercicio4_1.Movimiento.PIEDRA, jugador2: ejercicio4_1.Movimiento.TIJERAS },
    { jugador1: ejercicio4_1.Movimiento.PAPEL, jugador2: ejercicio4_1.Movimiento.PAPEL },
    { jugador1: ejercicio4_1.Movimiento.TIJERAS, jugador2: ejercicio4_1.Movimiento.PIEDRA },
];
console.log(`Resultados: ${(0, ejercicio4_1.calcularGanador)(jugadas)}`);
console.log("\nEjercicio 5:");
console.log(ejercicio5_1.reptil);
console.log("\nEjercicio 6:");
const rectangulo = new ejercicio6_1.Rectangulo(10, 5);
console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`);
const triangulo = new ejercicio6_1.Triangulo(10, 5);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
console.log("\nEjercicio 8:");
(0, ejercicio8_1.obtenerCervezas)();
//# sourceMappingURL=index.js.map