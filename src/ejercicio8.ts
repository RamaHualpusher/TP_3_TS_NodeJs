import axios from 'axios';

export class Cerveza {
  id: number;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
}

export async function obtenerCervezas(): Promise<void> {
  const url = 'https://random-data-api.com/api/beer/random_beer?size=25';
  try {
    const response = await axios.get(url);
    const cervezas: Cerveza[] = response.data;

    for (const cerveza of cervezas) {
      console.log(`Marca: ${cerveza.brand}, Nombre: ${cerveza.name}, Estilo: ${cerveza.style}, IBU: ${cerveza.ibu}, Alcohol: ${cerveza.alcohol}`);
    }
  } catch (error) {
    console.error(`Error al obtener datos: ${error.message}`);
}
}

obtenerCervezas();

