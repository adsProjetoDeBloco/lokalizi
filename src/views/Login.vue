<template>
  <div class="container">
    <img src="../assets/lokalizi.png" alt="" />
    <div class="formulario">
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email"/>
        <input type="password" v-model="password" placeholder="Senha"/>
        <p class="alert" v-if="errMsg">{{ errMsg }}</p>
        <button class="bt-login" type="submit">Login</button>
      </form>
      <div class="midias">
        <ul>
          <li><img src="../assets/logos_facebook.png" alt="" @click.prevent="loginWithFacebook"></li>
          <li><img src="../assets/logos_google-icon.png" alt="" @click.prevent="loginWithGoolge"></li>
          <li><img src="../assets/vscode-icons_file-type-outlook.png" alt="" @click.prevent="loginWithOutlook"></li>
        </ul>
      </div>
      <div class="dificuldade">
        <p>Dificuldade de logar? <router-link to="/register">Clique Aqui</router-link></p>
      </div>
      <div class="cadastre-se">
        <p> Não possui conta? <router-link to="/register"> Crie Agora </router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth,
 signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider  } from 'firebase/auth'

export default {
    data() {
        return {
            email:'',
            password:'',
            errMsg: ''

        }
    },
    methods: {
        login(){
              const auth = getAuth()
              signInWithEmailAndPassword(auth, this.email, this.password)
                .then((data) => {
                    console.log("Você logou com Sucesso!")

                    console.log(auth.currentUser)

                    this.$router.push({name: 'home'}) 
                    
                })
                .catch((error) => {
                  console.log(error)
                  switch(error.code){
                    case "auth/invalid-email":
                      this.errMsg = "Email Invalido"
                      break;
                    case "auth/user-not-found":
                      this.errMsg = "Usuario Não Encontrado"
                      break;
                    case "auth/wrong-password":
                      this.errMsg = "Senha Incorreta"
                      break;
                    default:
                      this.errMsg = "Email ou senha incorretos"
                      break;
                  }
                  

                })

        },
        loginWithGoolge(){
            const provider = new GoogleAuthProvider()
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result);
                    this.$router.push({name: 'home'})
                }).catch((err) => {
                    console.log(err)
                })
        },
        loginWithFacebook(){
            const provider = new FacebookAuthProvider()
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result);
                    this.$router.push({name: 'home'})
                }).catch((err) => {
                    console.log(err)
                })
        }
    },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&display=swap");


.login-page {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 200px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  border-radius: 15px;
  margin: 40px auto;
  width: 275px;
  height: 55px;
  background: rgba(240, 114, 65, 0.61);
  border: none;
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

ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 73px;
}
li{
  margin: 8.66px;
  cursor: pointer;
}

p {
  font-family: "Advent Pro";
  color: #FFFFFF;
}
.alert{
  color:red;
  font-weight: bolder;
  font-size: 20px;
}
</style>