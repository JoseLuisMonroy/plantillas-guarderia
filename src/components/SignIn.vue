<template>
  <div class="login">
    <h1 class="title">Bienvenido!!</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password"><br>
      <div class="division">
        <div class="punto"></div>
        <div class="linea"></div>
      </div><br><br>
      <input class="form-submit" type="submit" value="Ingresar">
    </form>
  </div>
</template>

<script>
import LogIn from "./services/SignIn";

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login() {
      //cuando la promesa se resuelva, se ejecuta el método redireccionar
      LogIn.iniciarSesion(this.email, this.password).then(this.redireccionar('maestro'));
    },
    redireccionar(respuesta) {
      console.log(respuesta);
      if (respuesta == "maestro"){
      this.$router.push("/maestro");
      }else if (respuesta == "tutor"){
      this.$router.push("/padre");
      }
      else{
        alert("Usuario o contraseña incorrectos");
      }
    }
  }
};
</script>
<style scoped>
@import "../assets/estilos.css";
</style>
