"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = exports.Rectangulo = exports.FiguraGeometrica = void 0;
class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
exports.FiguraGeometrica = FiguraGeometrica;
class Rectangulo extends FiguraGeometrica {
    calcularArea() {
        return this.base * this.altura;
    }
}
exports.Rectangulo = Rectangulo;
class Triangulo extends FiguraGeometrica {
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
exports.Triangulo = Triangulo;
const rectangulo = new Rectangulo(10, 5);
console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`);
const triangulo = new Triangulo(10, 5);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
//# sourceMappingURL=ejercicio6.js.map