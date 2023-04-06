import { resultadoDoble } from "./ejercicio1";
import { getVillano } from "./ejercicio2";
import { contarVocales } from "./ejercicio3";
import { Movimiento, Jugada, calcularGanador } from "./ejercicio4";
import { reptil, Reptil } from "./ejercicio5";
import { FiguraGeometrica, Rectangulo, Triangulo } from "./ejercicio6";
import { obtenerCervezas } from "./ejercicio8";

console.log("Ejercicio 1:");
console.log(`Resultado doble: ${resultadoDoble(2, 2)}`);

console.log("\nEjercicio 2:");
console.log(getVillano("Dr. Malvado", 42));

console.log("\nEjercicio 3:");
console.log(`Vocales encontradas: ${contarVocales("esto es una prueba de codigo")}`);

console.log("\nEjercicio 4:");
const jugadas: Jugada[] = [
  { jugador1: Movimiento.PIEDRA, jugador2: Movimiento.TIJERAS },
  { jugador1: Movimiento.PAPEL, jugador2: Movimiento.PAPEL },
  { jugador1: Movimiento.TIJERAS, jugador2: Movimiento.PIEDRA },
];
console.log(`Resultados: ${calcularGanador(jugadas)}`);

console.log("\nEjercicio 5:");
console.log(reptil);

console.log("\nEjercicio 6:");
const rectangulo = new Rectangulo(10, 5);
console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`);

const triangulo = new Triangulo(10, 5);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);

console.log("\nEjercicio 8:");
obtenerCervezas();
