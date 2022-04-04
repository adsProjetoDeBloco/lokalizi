<template>
<nav>
    <div class="icones">

        <router-link to="/home"><div class="circle"><img src="../assets/map_nav.png" alt="" srcset=""></div> </router-link>
        <router-link to="/search"><img  class="lupa" src="../assets/lupa_nav.png" alt="" srcset=""></router-link>
        <router-link to="/register"><img class="musica"  src="../assets/song_nav.png" alt="" srcset=""></router-link>
        <router-link to="/"><img   src="../assets/fav_nav.png" alt="" srcset=""></router-link>
        <router-link to="/"><img  class="prof" src="../assets/prof_nav.png" alt="" srcset=""></router-link>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    margin-top: 8px;
}
.circle{
    background-color: #F28459;
    height: 42px;
    width: 30px;
    margin-bottom: 55px;
    border-radius: 25px;
}
nav{
    display: flex;
    height: 60px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(35px);
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
}
.icones{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 12px auto;
    width: 100%;
}
.lupa{
    width: 30px;
}
.musica{
    width: 32px;

}
.prof{
    width: 28px;
}
</style>