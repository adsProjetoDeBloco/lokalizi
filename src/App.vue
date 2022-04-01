<template>
<nav>

  <router-link to="/">Login</router-link>
  <router-link to="/home">Home</router-link>
  <router-link to="/register">Registre-se</router-link>
  <router-link to="/search">Search</router-link>
</nav>
  <router-view />
</template>


<script>
export default {
  methods: {
    handleStyles() {
      // Se tem na rota / a class do body é alterada
      if (["/"].includes(this.$route.path))
        document.body.className = "bg-login";
      else if (["/home"].includes(this.$route.path))
        document.body.className = "bg-home";
      else if (["/register"].includes(this.$route.path))
        document.body.className = "bg-register";
    },
  },
  // Executa o metodo assim que montado
  mounted() {
    this.handleStyles();
  },
  // Troca o estilo quando a rota é alterada
  watch: {
    $route() {
      this.handleStyles();
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
nav{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-login {
  background-image: url("./assets/login-background.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  
}
.bg-home {
  background-image: url("./assets/backgroundpg2.png");
  background-size: cover;
  background-attachment: fixed; /*Deixa o background fixo para o tamanho da tela*/
  background-repeat: no-repeat;
}
.bg-register {
  background-image: none;
  background-size: cover;
  background-attachment: fixed; /*Deixa o background fixo para o tamanho da tela*/
  background-repeat: no-repeat;
}
</style>
