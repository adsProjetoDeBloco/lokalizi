<template>
  <div class="container">
    <lokalizi-logo></lokalizi-logo>
    <p>Registe-se e comece utlizar agora!</p>
    <p v-show="msgErro" style="color: red">{{ msgErro }}</p>
    <register-form :submit="register" :user="user"></register-form>
    <p>Ou utilize suas redes sociais para se cadastrar</p>
    <social-buttons></social-buttons>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import RegisterForm from '../components/RegisterForm.vue'
import SocialButtons from "../components/SocialButtons.vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default {
  components:{
    'lokalizi-logo': Logo,
    'register-form': RegisterForm,
    "social-buttons": SocialButtons,
  },
  data() {
    return {
      user: {
        name: "",
        secondName: "",
        email: "",
        password: "",
      },
      msgErro: ''
    };
  },
  methods: {
    register() {
      if(!this.user.name || !this.user.secondName){
        this.msgErro = 'Preencha nome e sobrenome'
      }
      this.$store.commit('CADASTRAR_NOVO_USUARIO', this.user)
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
p{
  font-family: 'Montserrat', sans-serif;
  color:#000;
}

</style>