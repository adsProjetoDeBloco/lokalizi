<template>
  <nav>
    <div class="icones">
      <router-link to="/home">
        <div :class="estiloHome">
          <img src="../assets/map_nav.png" alt="" srcset="" />
        </div>
      </router-link>
      <router-link to="/search">
        <div :class="estiloSearch">
          <img class="lupa" src="../assets/lupa_nav.png" alt="" srcset="" />
        </div>
      </router-link>
      <router-link to="/register">
        <img class="musica" src="../assets/song_nav.png" alt="" srcset="" />
      </router-link>
      <router-link to="/">
        <img src="../assets/fav_nav.png" alt="" srcset="" />
      </router-link>
      <div class="dropup">
        <button class="dropbtn">
          <img class="prof" src="../assets/prof_nav.png" alt="" />
        </button>
        <div class="dropup-content">
          <a href="#"><img src="../assets/icone_localizar.png" alt="" /></a>
          <a href="#"
            ><img class="policia" src="../assets/policia_nav.png" alt=""
          /></a>
          <a class="ajuste-perfil" href="#"
            ><img class="perfil" src="../assets/perfil_nav.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      estiloHome: "",
      estiloSearch: "",
      currentRoute: window.location.pathname,
    };
  },
  mounted() {
    if (this.currentRoute == "/home") {
      this.estiloHome = "circle";
    }
    if (this.currentRoute == "/search") {
      this.estiloSearch = "circle";
    }
  },
};
</script>

<style scoped>
button {
  border: none;
}
img {
  margin-top: 8px;
}

nav {
  display: flex;
  height: 60px;
  background: white;
  backdrop-filter: blur(35px);
  border-top-right-radius: 27px;
  border-top-left-radius: 27px;
}

/*MARCADOR DE SELECIONAR ICONES*/
.circle {
  background-color: #f28459;
  height: 42px;
  width: 30px;
  margin-bottom: 55px;
  border-radius: 25px;
}
/*ICONES DA NAVBAR*/
.icones {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px auto;
  width: 100%;
}
.lupa {
  width: 30px;
}
.musica {
  width: 32px;
}
.prof {
  width: 28px;
}

.policia {
  width: 33px;
}
.perfil {
  border-radius: 15px;
  margin-left: 10px;
}
.ajuste-perfil {
  margin-right: 18px;
}
/*FIM DOS ICONES*/

/*DROP-UP BUTTON*/
.dropbtn {
  background: transparent;
  border: none;
}

.dropup {
  position: relative;
  display: inline-block;
}
.dropup-content {
  display: none;
  position: absolute;
  background: white;
  width: 52.62px;
  height: 180px;
  bottom: 27px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}

.dropup-content a {
  color: black;
  text-decoration: none;
  display: block;
}

a {
  height: 48px;
}

.dropup:hover .dropup-content {
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>