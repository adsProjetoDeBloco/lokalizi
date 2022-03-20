<template>
    <div class="container">
        <h1>Crie sua Conta</h1>
        <form @onSubmit.prevent="">
            <input type="email" v-model="email"/>
            <input type="password" v-model="password" />
            <button @click.prevent="register">Cadastrar</button>
            <button @click="singInWithGoogle">Cadastre-se com Google</button>
        </form>
    </div>    
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        register(){
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                    console.log("Registrado com Sucesso!")
                    this.$router.push({name: 'home'}) 
                    
                })
                .catch((error) => {
                    console.log(error.code)
                    alert(error.message)
                })

        },
        signInWithGoogle(){

        }
    },
}
</script>

<style>

</style>