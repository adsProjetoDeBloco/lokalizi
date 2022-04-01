<template>
  <GoogleMap api-key="AIzaSyBe19mgySnJRw_H_1JOu4D6xoU6o97pwbI" style="width: 100%; height: 100vh" :center="center" :zoom="15">
    <Marker :options="{ position: center }">
   
    </Marker>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, InfoWindow, Marker } from "vue3-google-map";
export default defineComponent({
  components: { GoogleMap, InfoWindow, Marker  },
  setup() {
    const center = { lat: -19.924857909457707, lng: -43.93558942328529 };

    return { center };
  },
});
</script>