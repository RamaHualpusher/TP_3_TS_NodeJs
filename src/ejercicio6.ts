export abstract class FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    abstract calcularArea(): number;
  }
  
  export class Rectangulo extends FiguraGeometrica {
    calcularArea(): number {
      return this.base * this.altura;
    }
  }
  
  export class Triangulo extends FiguraGeometrica {
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  }
  
  const rectangulo = new Rectangulo(10, 5);
  console.log(`Área del rectángulo: ${rectangulo.calcularArea()}`);
  
  const triangulo = new Triangulo(10, 5);
  console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
  