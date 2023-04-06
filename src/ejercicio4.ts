export enum Movimiento {
  PIEDRA,
  PAPEL,
  TIJERAS,
}

export class Jugada {
  jugador1: Movimiento;
  jugador2: Movimiento;
}

export function calcularGanador(jugadas: Jugada[]): string[] {
  const resultados: string[] = [];

  for (const jugada of jugadas) {
    if (jugada.jugador1 === jugada.jugador2) {
      resultados.push("Empate");
    } else if (
      (jugada.jugador1 === Movimiento.PIEDRA && jugada.jugador2 === Movimiento.TIJERAS) ||
      (jugada.jugador1 === Movimiento.PAPEL && jugada.jugador2 === Movimiento.PIEDRA) ||
      (jugada.jugador1 === Movimiento.TIJERAS && jugada.jugador2 === Movimiento.PAPEL)
    ) {
      resultados.push("Gana 1");
    } else {
      resultados.push("Gana 2");
    }
  }
  return resultados;
}

  
  const jugadas: Jugada[] = [
    { jugador1: Movimiento.PIEDRA, jugador2: Movimiento.PAPEL },
    { jugador1: Movimiento.PAPEL, jugador2: Movimiento.PAPEL },
    { jugador1: Movimiento.TIJERAS, jugador2: Movimiento.PIEDRA },
  ];
  
  console.log(calcularGanador(jugadas));
  