import Cookies from "js-cookie";
import axios from "axios";

var LogIn = {};

LogIn.iniciarSesion = function() {

    const curl = 'http://localhost:3000/logIn';
    const queryParams = {
    usuario: 'docente1@example.com',
    password: 'contrasena1'
    };
    const url = curl + '?' + Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');

    return axios.post(url)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

LogIn.obtenerToken = function(){
    return Cookies.get("token");
}

export default LogIn;