window.onload = function() {

    const alumnos = document.querySelector("#alumnos");
    const url = "http://localhost:3000/alumnos";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(alumno => {
                const option = document.createElement("option");
                option.value = alumno.id;
                option.text = alumno.nombre;
                select.appendChild(option);
            });
        });

    const select = document.querySelector("#registros");
    select.addEventListener("change", function(){
    const valor = this.value;
    if(valor == 1){
        dormir();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const horaIngresada = document.querySelector("#hora").value;
            const horaFin = document.querySelector("#horaFin").value;

            console.log(`Hora ingresada: ${horaIngresada}`);
            console.log(`Hora de fin: ${horaFin}`);
        });
    }
    else if(valor == 2){
        comer();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const menuSeleccionado = document.querySelector("#menu").value;
            const comidaSeleccionada = document.querySelector("#comida").value;

            const horaIngresada = document.querySelector("#hora").value;

            console.log(`Menú seleccionado: ${menuSeleccionado}`);
            console.log(`Cantidad de comida seleccionada: ${comidaSeleccionada}`);
            console.log(`Hora ingresada: ${horaIngresada}`);
        });
    }
    else if(valor == 3){
        bano();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {
            const tipoSeleccionado = document.querySelector("#tipo").value;

            const horaIngresada = document.querySelector("#hora").value;

            console.log(`Tipo de baño seleccionado: ${tipoSeleccionado}`);
            console.log(`Hora ingresada: ${horaIngresada}`);
        });
    }
    else if(valor == 4){
        observaciones();
        const enviarBtn = document.querySelector("#enviar");
        enviarBtn.addEventListener("click", function() {

            const horaIngresada = document.querySelector("#hora").value;
            const observacionesIngresadas = document.querySelector("#observaciones").value;

            console.log(`Hora ingresada: ${horaIngresada}`);
            console.log(`Observaciones ingresadas: ${observacionesIngresadas}`);
        });
    }
    });
};

function dormir(){
    const reportes = document.getElementById("reportes");
    
    const banner = `
    <div class="registro">
        <label for="hora">Hora de Inicio:</label>
        <input type="text" id="hora" value="${new Date().toLocaleTimeString()}" readonly class="hora"> 

        <label for="hora">Hora de Fin:</label>
        <input type="time" id="horaFin">

        <button id="enviar">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}

function comer(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="hora">

        <label for="menu">Menú del día:</label>
        <select id="menu">
            <option value="">-- Selecciona una opción --</option>
            <option value="arroz con pollo">Arroz con pollo</option>
            <option value="lomo saltado">Lomo saltado</option>
            <option value="ceviche">Ceviche</option>
            <option value="tallarines verdes">Tallarines verdes</option>
        </select>

        <label for="comida">Cantidad de comida:</label>
        <select id="comida">
            <option value="">-- Selecciona una opción --</option>
            <option value="todo">Todo</option>
            <option value="poco">Poco</option>
            <option value="mitad">La mitad</option>
            <option value="nada">Nada</option>
        </select>

        <button id="enviar">Enviar</button>
        </div>
    `;
    reportes.innerHTML = banner;
}

function bano(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="hora">

        <label for="tipo">Tipo de baño:</label>
        <select id="tipo">
            <option value="">--Que hizo?--</option>
            <option value="pipi">Pipi</option>
            <option value="popo">Popo</option>
            <option value="pipi y popo">Pipi y Popo</option>
        </select>

        <button id="enviar">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}

function observaciones(){
    const reportes = document.getElementById("reportes");
    const fechaActual = new Date();
    const horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const banner = `
    <div class="registro">
        <label for="hora">Hora:</label>
        <input type="text" id="hora" value="${horaActual}" readonly class="hora">

        <label for="observaciones">Observaciones:</label>
        <textarea id="observaciones" rows="4" cols="50" class="hora"></textarea>

        <button id="enviar">Enviar</button>
    </div>
    `;
    reportes.innerHTML = banner;
}