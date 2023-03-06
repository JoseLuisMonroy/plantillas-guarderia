let accion ={};

accion.llenarTablas = function (data) {
    const nombre = data.nombre;
    document.getElementById('nombreAlumno').innerHTML = nombre;

    const siestas = data.siestas;
    for (let i = 0; i < siestas.length; i++) {
        const siesta = siestas[i];
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${siesta.horaIngresada}</td>
                          <td>${siesta.horaFin}</td>`;
        document.getElementById('dormir').appendChild(fila);
    }
    const comida = data.comida;
    const fila1 = document.createElement('tr');
    fila1.innerHTML = `<td>${comida.horaIngresada}</td>
                       <td>${comida.comida}</td>
                       <td>${comida.totalComido}</td>`;
    document.getElementById('comer').appendChild(fila1);
    const bano = data.bano;
    for (let i = 0; i <bano.length; i++) {
        const fila2 = document.createElement('tr');
        fila2.innerHTML = `<td>${bano[i].horaIngresada}</td>
                            <td>${bano[i].tipo}</td>`;
        document.getElementById('bano').appendChild(fila2);
    }
    const observaciones = data.observaciones;
    for (let i = 0; i < observaciones.length; i++) {
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `<p>${observaciones[i].observacion}</p>`;
        document.getElementById('observaciones').appendChild(parrafo);
    }

}


export default accion;

