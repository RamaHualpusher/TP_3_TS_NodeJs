class Vehiculo {
    marca: string;
    modelo: string;
    patente: string;
  }
  
  const vehiculos: Vehiculo[] = [];
  
  function guardarVehiculo(): void {
    const v = new Vehiculo();
    v.marca = (document.getElementById('marca') as HTMLInputElement).value;
    v.modelo = (document.getElementById('modelo') as HTMLInputElement).value;
    v.patente = (document.getElementById('patente') as HTMLInputElement).value;
    vehiculos.push(v);
  
    let listHTML = '<ul>';
    for (const vehiculo of vehiculos) {
      listHTML += `<li>${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.patente}</li>`;
    }
    listHTML += '</ul>';
  
    (document.getElementById('listadoVehiculos') as HTMLElement).innerHTML = listHTML;
  }
  