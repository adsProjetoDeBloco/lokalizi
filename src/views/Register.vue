<template>
  <div class="container">
    <h1>Crie sua Conta</h1>
    <form @onSubmit.prevent="">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button @click.prevent="register">Cadastrar</button>
    </form>
    <button @click.prevent="signInWithGoogle">Cadastre-se com Google</button>
  </div>
</template>

<script>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const email = this.email
      const password = this.password
      this.$store.commit('CADASTRAR_NOVO_USUARIO', {email, password})
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>