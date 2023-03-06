<template>
    <div class="main">
        <div class="cabecera">
            <h1>Reporte de su hij@</h1>
            <h2 id="nombre"></h2>
        </div>
        <div class="seleccionar">
            <h2>En caso de tener mas de un hijo o hija en el plantel, porfavor seleccione el reporte de quien desea ver</h2>
            <select name="alumnos" id="alumnos" class="menu">
                <option value="0" id="nombreAlumno"></option>
            </select>
        </div>
        <div class="reportes">
            <div class="tablas" >
                <table id="dormir" class="dormir">
                    <caption>Horas de sueno</caption>
                    <tr>
                        <th>Hora de inicio</th>
                        <th>Hora de fin</th>
                    </tr>
                </table>
                <div>
                <table id="comer" class="comer">
                    <caption>Comida</caption>
                    <tr>
                        <th>Hora de comida</th>
                        <th>Comida</th>
                        <th>Que tanto comio</th>
                    </tr>
                </table>
                </div>
                <div>
                <table id="bano" class="bano">
                    <caption>Baño</caption>
                    <tr>
                        <th>Hora</th>
                        <th>Que hizo?</th>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        <div id="observaciones">
                <h2>Observaciones</h2>
                <div id="textoObs"></div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import accion from './services/tutor.js';
window.onload = function(){
    axios
        .get('/alumnos.json')
        .then(response => {
            this.jsonData = response.data;
            accion.llenarTablas(this.jsonData[0]);          
        })
        .catch(error => {
            console.log(error);
        });
}
export default {
    name: 'TutorView',
    components: {
    }
}
</script>