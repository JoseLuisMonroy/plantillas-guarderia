<template>
    <div class="main">
        <div class="cabecera">
            <h1>Reporte de su hij@</h1>
            <h2 id="nombre"></h2>
        </div>
        <div class="seleccionar">
            <h2>En caso de tener mas de un hijo o hija en el plantel, porfavor seleccione el reporte de quien desea ver</h2>
            <select name="alumnos" id="alumnos" class="menu">
                <option value="0">JuanitoPerez</option>
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
                    <tr>
                        <td>8:00</td>
                        <td>8:30</td>
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
                    <tr>
                        <td>8:00</td>
                        <td>Desayuno</td>
                        <td>Comio todo</td>
                    </tr>
                </table>
                </div>
                <div>
                <table id="bano" class="bano">
                    <caption>Baño</caption>
                    <tr>
                        <th>Hora</th>
                    </tr>
                    <tr>
                        <td>8:00</td>
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

export default {
    name: 'TutorView',
    components: {
    }
}
</script>