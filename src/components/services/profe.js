import axios from 'axios';

var accion = {}

accion.dormir = function(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora de Inicio:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="noAfectar"><br><br>

        <label for="hora">Hora de Fin:</label>
        <input type="time" id="horaFin" class="cuadrosTmp"><br><br>

        <button id="enviar" class="button">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}

accion.comer = function(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="noAfectar"><br><br>

        <label for="menu">Menú del día:</label>
        <select id="menu" class="menu">
            <option value="0">-- Selecciona una opción --</option>
            <option value="arroz con pollo">Arroz con pollo</option>
            <option value="lomo saltado">Lomo saltado</option>
            <option value="ceviche">Ceviche</option>
            <option value="tallarines verdes">Tallarines verdes</option>
        </select><br><br>

        <label for="comida">Cuanto comio?:</label>
        <select id="comida" class="menu">>
            <option value="0">-- Selecciona una opción --</option>
            <option value="todo">Todo</option>
            <option value="poco">Poco</option>
            <option value="mitad">La mitad</option>
            <option value="nada">Nada</option>
        </select><br><br>

        <button id="enviar" class="button">Enviar</button>
        </div>
    `;
    reportes.innerHTML = banner;
}

accion.bano = function(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="noAfectar"><br>

        <label for="tipo">Que hizo?:</label>
        <select id="tipo" class="menu">
            <option value="-1">--Que hizo?--</option>
            <option value="pipi">Pipi</option>
            <option value="popo">Popo</option>
            <option value="pipi y popo">Pipi y Popo</option>
        </select><br><br>

        <button id="enviar" class="button">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}

accion.observaciones = function(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="noAfectar"><br>

        <label for="observaciones">Observaciones:</label>
        <textarea id="observaciones" rows="4" cols="50"></textarea> <br><br>

        <button id="enviar" class="button">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}

accion.enviar = function(datos){
    const dirc = "http://localhost:3000/api/registro";
    const token = localStorage.getItem("token");

    axios.post(dirc, datos, {
        headers: {
            'Authorization': token
        }
    })
        .then(function () {
            alert("Datos enviados correctamente");
        })
        .catch(function () {
            alert("Error al enviar los datos");
        }
    );
}


export default accion;