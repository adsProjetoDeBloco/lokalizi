<template>
  <div class="container">
    <lokalizi-logo></lokalizi-logo>
    <div class="formulario">
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Senha" />
        <p class="alert" v-if="errMsg">{{ errMsg }}</p>
        <button class="bt-login" type="submit">Login</button>
      </form>

      <div class="bt-social">
        <social-buttons></social-buttons>
      </div>

      <div class="dificuldade">
        <p>
          Dificuldade de logar?
          <router-link to="/register">Clique Aqui</router-link>
        </p>
      </div>
      <div class="cadastre-se">
        <p>
          Não possui conta?
          <router-link to="/register"> Crie Agora </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Logo from "../components/Logo.vue";
import SocialButtons from "../components/SocialButtons.vue";

export default {
  components: {
    "lokalizi-logo": Logo,
    "social-buttons": SocialButtons,
  },
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log("Você logou com Sucesso!");
          console.log(auth.currentUser);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "Email Invalido";
              break;
            case "auth/user-not-found":
              this.errMsg = "Usuario Não Encontrado";
              break;
            case "auth/wrong-password":
              this.errMsg = "Senha Incorreta";
              break;
            default:
              this.errMsg = "Email ou senha incorretos";
              break;
          }
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&display=swap");

.login-page {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
  align-items: center;
}

input{
  background: rgba(240, 114, 65, 0.61);
  border-radius: 15px;
  width: 275px;
  height: 55px;
  border: none;
  margin: 41px auto;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 200px;
}

.bt-login {
  width: 153px;
  height: 60px;
  border-radius: 15px;
  background: rgba(96, 24, 72, 0.86);
  border: none;
  color: #ffffff;
  font-size: 24px;
  line-height: 29px;
  font-family: "Advent Pro";
  font-style: normal;
  margin-top: 70px;
}

p {
  font-family: "Advent Pro";
  color: #ffffff;
}
.alert {
  color: red;
  font-weight: bolder;
  font-size: 20px;
}
</style>