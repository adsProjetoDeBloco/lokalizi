<template>
  <div class="container">
    <div class="localiza">
      <div class="local">
        <h1>Felton Park</h1>
        <p>imaginzinha da distancia</p>
      </div>
      <div class="destino">
        <h1>5th Avenue</h1>
      </div>
      <div class="mapa">
        <h1>Mapinha</h1>
      </div>
      <div class="logout">
        <button @click.prevent="logout" v-if="isLoggedIn">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
export default {
  data() {
    return {
      isLoggedIn: false

    };
  },
  mounted() {
    let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false
      }
    })
    
  },
  methods: {
    logout(){
      let auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({name: "login"})
      })
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");

.local {
  width: 311px;
  height: 81.13px;
  margin-top: 121px;
  margin-bottom: 6.87px;
  font-family: "Alfa Slab One", cursive;
  color: #000000;
}
.destino {
  width: 311px;
  height: 81.13px;
  font-family: "Alfa Slab One", cursive;
  color: #000000;
}
.mapa {
  border: 10px solid black;
  width: 200px;
  height: 200px;
  margin-left: 190px;
}
</style>