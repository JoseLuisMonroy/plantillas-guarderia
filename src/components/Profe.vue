<template>
    <div class="main">
        <div class="cabecera">
            <h1>Reporte de el alumno</h1>
        </div>
        <div class="seleccionar">
            <h2>Seleccionar alumno</h2>
            <select name="alumnos" id="alumnos" class="registro">
                <option value="0">Seleccione un alumno</option>
            </select>
        </div>
        <div class="registro">
            <h2>Seleccionar reporte a realizar</h2>
            <select name="registros" id="registros" class="registro">
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
export default {
    name: 'ProfVista',
    components: {
    }
}
</script>

<style scoped>
@import "../assets/estilos.css";
</style>