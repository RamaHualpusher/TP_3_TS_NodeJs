class Vehiculo {
}
const vehiculos = [];
function guardarVehiculo() {
    const v = new Vehiculo();
    v.marca = document.getElementById('marca').value;
    v.modelo = document.getElementById('modelo').value;
    v.patente = document.getElementById('patente').value;
    vehiculos.push(v);
    let listHTML = '<ul>';
    for (const vehiculo of vehiculos) {
        listHTML += `<li>${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.patente}</li>`;
    }
    listHTML += '</ul>';
    document.getElementById('listadoVehiculos').innerHTML = listHTML;
}
//# sourceMappingURL=programa.js.map