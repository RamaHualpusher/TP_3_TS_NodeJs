export function contarVocales(cadena: string): number {
  const vocales = "aeiou";
  let contador = 0;

  for (const letra of cadena) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

  
  const entrada = 'esto es una prueba de codigo';
  const resultado = contarVocales(entrada);
  console.log(`Se encontraron ${resultado} vocales`);
  