import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://reqres.in/api/";
var LogIn = {};

LogIn.iniciarSesion = function(usuario, contrasena) {
    const user = { usuario, contrasena };
    return axios
        .post(ENDPOINT_PATH + "login", user)
        .then(response => {
            Cookies.set("token", response.data.token);
            return response.data;
        }
        )
}

LogIn.obtenerToken = function(){
    return Cookies.get("token");
}

export default LogIn;