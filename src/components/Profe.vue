<template>
    <div class="main">
        <h1 class="title">Reporte de el alumno</h1>
        <div class="seleccionar">
            <h2>Seleccionar alumno</h2>
            <select name="alumnos" id="alumnos" class="menu">
                <option value="0">Seleccione un alumno</option>
            </select>
        </div>
        <div class="registro">
            <h2>Seleccionar reporte a realizar</h2>
            <select name="registros" id="registros" class="menu">
                <option value="0">Seleccione un registro</option>
                <option value="1">Dormir</option>
                <option value="2">Comer</option>
                <option value="3">Baño</option>
                <option value="4">Observaciones</option>
            </select>
        </div>
        <div class="reportes" id="reportes">
        </div>
    </div>
</template>

<script>
import accion from './services/profe.js'

import axios from 'axios';

window.onload = function() {
    /*const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/alumnos");
    xhr.onload = function() {
        if (xhr.status === 200) {
        const alumnosJSON = xhr.responseText;
        inicializarSelectAlumnos(alumnosJSON);
        }
    };
    xhr.send();
    
    function inicializarSelectAlumnos(alumnosJSON) {
        const alumnos = JSON.parse(alumnosJSON);
    
        const selectAlumnos = document.getElementById("alumnos");
    
        alumnos.forEach(alumno => {
        const option = document.createElement("option");
        option.text = alumno.nombre;
        selectAlumnos.add(option);
        });
    }*/
    axios
        .get('/alumnos.json')
        .then(response => {
            this.jsonData = response.data;
            const selectAlumnos = document.getElementById("alumnos");
            this.jsonData.forEach(alumno => {
                const option = document.createElement("option");
                option.text = alumno.nombre;
                selectAlumnos.add(option);
            });
        })
        .catch(error => {
            console.log(error);
        });

    const select = document.querySelector("#registros");
    select.addEventListener("change", function(){
    const valor = this.value;
    if(valor == 1){
        accion.dormir();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const horaIngresada = document.querySelector("#hora").value;
            const horaFin = document.querySelector("#horaFin").value;

            console.log(`Hora ingresada: ${horaIngresada}`);
            console.log(`Hora de fin: ${horaFin}`);

            let datos = {
                hora: horaIngresada,
                horaFin: horaFin
            }

            accion.enviarDatos(datos);

            document.querySelector("#horaFin").value = "";

        });
    }
    else if(valor == 2){
        accion.comer();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const menuSeleccionado = document.querySelector("#menu").value;
            const comidaSeleccionada = document.querySelector("#comida").value;

            const horaIngresada = document.querySelector("#hora").value;

            console.log(`Menú seleccionado: ${menuSeleccionado}`);
            console.log(`Cantidad de comida seleccionada: ${comidaSeleccionada}`);
            console.log(`Hora ingresada: ${horaIngresada}`);

            let datos = {
                menu: menuSeleccionado,
                comida: comidaSeleccionada,
                hora: horaIngresada
            }

            accion.enviarDatos(datos);

            document.querySelector("#menu").value = 0;
            document.querySelector("#comida").value = 0;

        });
    }
    else if(valor == 3){
        accion.bano();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const tipoSeleccionado = document.querySelector("#tipo").value;

            const horaIngresada = document.querySelector("#hora").value;

            console.log(`Tipo de baño seleccionado: ${tipoSeleccionado}`);
            console.log(`Hora ingresada: ${horaIngresada}`);

            let datos = {
                tipo: tipoSeleccionado,
                hora: horaIngresada
            }

            accion.enviarDatos(datos);

            document.querySelector("#tipo").value = -1;

        });
    }
    else if(valor == 4){
        accion.observaciones();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {

            const horaIngresada = document.querySelector("#hora").value;
            const observacionesIngresadas = document.querySelector("#observaciones").value;

            console.log(`Hora ingresada: ${horaIngresada}`);
            console.log(`Observaciones ingresadas: ${observacionesIngresadas}`);
            
            let datos = {
                hora: horaIngresada,
                observaciones: observacionesIngresadas
            }

            accion.enviarDatos(datos);

            document.querySelector("#observaciones").value = "";
        });
    }
    });
};


export default {
    data() {
        return {
        jsonData: null,
        };
    },
    name: 'ProfVista',
    components: {
    }
}
</script>

<style scoped>
@import "../assets/estilos.css";
</style>