<template>
  <div id="app">
    <nav>
      <router-link to="/" >Home</router-link> |
      <router-link to="/padre">Reporte papas</router-link> |
      <router-link to="/maestro">Reporte profe</router-link> |
    </nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
