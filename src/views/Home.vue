<template>
  <div class="container">
    <div class="localiza">
      <div class="local">
        <h1>{{ local }}</h1>
        <h1 v-show="!local">Selecione seu destino</h1>
      </div>
      <div class="destino">
        <h1>{{ destino }}</h1>
      </div>
      <div class="mapa" @click="search">
        <div class="mini-mapa">
          <img src="../../static/union.png" alt="" srcset="">
              <iframe @click.prevent="search" id="google-maps" src="https://maps.google.com/maps?q=R.%20do%20Ros%C3%A1rio%2C%20128%20-%20Centro%20rio%20de%20janeiro&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </div>
      <div class="logout">
        <button @click.prevent="logout" v-if="isLoggedIn">Logout</button>
      </div>
    </div>
    <footer>
      <NaviBar/>
    </footer>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import NaviBar from '@/components/NavBarItems.vue'

export default {
  components:{
    NaviBar
  },
  data() {
    return {
      isLoggedIn: false,
      local:'',
      destino:''

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
    },
    search(){
      this.$router.push({name: 'search'})
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
  display: flex;
  
  width: 100%;
  justify-content: flex-end;
  
}
.mini-mapa {
  display: flex;
  justify-content: flex-end;
  
}
iframe{
  position: absolute;
  margin-top:20px;
  width: 120px;
  height: 230px;
}
footer{
  margin-top: 200px
}
</style>