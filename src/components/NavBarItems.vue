<template>
<nav>
    <div class="icones">

        <router-link to="/home"><img  src="../assets/map_nav.png" alt="" srcset=""></router-link>
        <router-link to="/search"><img  class="lupa" src="../assets/lupa_nav.png" alt="" srcset=""></router-link>
        <router-link to="/register">Registre-se</router-link>
        <router-link to="/">Login</router-link>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    display: flex;
    height: 80px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(35px);
}
.icones{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px auto;

    width: 100%;
}
.lupa{
    width: 30px;
}

</style>