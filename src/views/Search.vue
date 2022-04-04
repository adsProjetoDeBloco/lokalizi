<template>
  <GoogleMap
    api-key="AIzaSyBe19mgySnJRw_H_1JOu4D6xoU6o97pwbI"
    style="width: 100%; height: 100vh"
    :center="center"
    :zoom="15"
  >
    <div class="searchbox">
      <input type="text" />
    </div>
    <div class="botoes">
      <div class="restaurante">
        <button><p>Restaurante</p></button>
      </div>
      <div class="hoteis">
        <button><p>Hoteis</p></button>
      </div>
      <div class="turistico">
        <button><p>Turistico</p></button>
      </div>
    </div>
    <Marker :options="{ position: center }"> </Marker>

    <NaviBar class="navegador"/>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, InfoWindow, Marker } from "vue3-google-map";
import NaviBar from '@/components/NavBarItems.vue'
export default defineComponent({
  components: { GoogleMap, InfoWindow, Marker, NaviBar },
  setup() {
    const center = { lat: -19.924857909457707, lng: -43.93558942328529 };

    return { center };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
input {
  opacity: 0.85;
  position: absolute;
  width: 361px;
  height: 44.29px;
  left: 12.5px;
  top: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  border: none;
  background-image: url("../assets/icone_localizar.png");
  background-position: 9px 10px;
  background-repeat: no-repeat;
  text-align: center;
}
.botoes {
  position: absolute;
  left: 0px;
  top: 120px;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.restaurante button {
  height: 34px;
  width: 150px;
  background-image: url("../assets/icone_restaurante.png");
  background-position: 9px 7px;
  background-repeat: no-repeat;
}
.hoteis button {
  width: 94.67px;
  height: 34px;
  background-image: url("../assets/icone_hoteis.png");
  background-position: 5px 9px;
  background-repeat: no-repeat;
}
.turistico button {
  width: 111px;
  height: 34px;
  background-image: url("../assets/icone_turistico.png");
  background-position: 3px 5px;
  background-repeat: no-repeat;
}
button {
  opacity: 0.85;
  margin: auto 5px;
  border: none;
  background-color: white;
  border-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgba(13, 13, 13, 0.6);
}
p {
  margin-left: 15px;
}
.navegador{
  position: absolute;
  top: 782px;
  width: 100%;
}

/*here starts the media queri*/
@media (min-width: 360px) and (max-width: 389px) {
  input {
    left: 0.5px;
    top: 70px;
  }
  .botoes {
    top: 120px;
  }
  .navegador{
    position: absolute;
    top: 680px;
    width: 100%;
  }
}
@media (min-width: 389px) and (max-width: 389px) {
  input {
    left: 10.5px;
    top: 70px;
  }
  .botoes {
    
    top: 120px;
  }
  .navegador{
    position: absolute;
    top: 616px;
    width: 100%;
  }
}
@media (min-width: 390px) and (max-width: 392px) {
  input {
    left: 20.5px;
    top: 70px;
  }
  .botoes {
    left: 6.5px;
    top: 120px;
  }
  .navegador{
    position: absolute;
    top: 784px;
    width: 100%;
  }
}
@media (min-width: 393px) and (max-width: 411px) {

  .navegador{
    position: absolute;
    top: 791px;
    width: 100.1%;
  }
}
@media (min-width: 412px) and (max-width: 413px) {
  .navegador{
    position: absolute;
    top: 855px;
    width: 100%;
  }
}
@media (min-width: 414px) and (max-width: 434px) {
  input {
    left: 20.5px;
    top: 70px;
  }
  .botoes {
    left: 6.5px;
    top: 120px;
  }
  .navegador{
    position: absolute;
    top: 840px;
    width: 100%;
  }
}
@media (min-width: 435px) and (max-width: 509px) {
  input {
    left: 58.5px;
    top: 70px;
  }
  .botoes {
    left: 43.5px;
    top: 120px;
  }
}
@media (min-width: 515px) and (max-width: 589px) {
  input {
    left: 75.5px;
    top: 70px;
  }

  .botoes {
    left: 63.5px;
    top: 120px;
  }
}
@media (min-width: 590px) and (max-width: 659px) {
  input {
    left: 115.5px;
    top: 70px;
  }
  .botoes {
    left: 102.5px;
    top: 120px;
  }
}
@media (min-width: 660px) and (max-width: 739px) {
  input {
    left: 155.5px;
    top: 70px;
  }
  .botoes {
    left: 142.5px;
    top: 120px;
  }
}
@media (min-width: 740px) and (max-width: 767px) {
  input {
    left: 210.5px;
    top: 70px;
  }
  .botoes {
    left: 196.5px;
    top: 120px;
  }
  
}
@media (min-width: 768px) and (max-width: 819px) {

  .navegador{
    position: absolute;
    top: 964px;
    width: 100%;
  }
}
@media (min-width: 820px) and (max-width: 960px) {
    input {
    left: 210.5px;
    top: 70px;
  }
  .botoes {
    left: 196.5px;
    top: 120px;
  } 
 .navegador{
    position: absolute;
    top: 1120px;
    width: 100%;
  }
}
</style>