import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'

export default createStore({
  state: {
    user: {
      name: "",
      secondName: "",
      email: "",
      password: "",
    }
  },
  getters: {
  },
  mutations: {
    CADASTRAR_NOVO_USUARIO(state, user) {
      createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then((res) => {
          router.push({ name: 'home' })
          state.user.email = user.email
          state.user.password = user.password
          
          //Pegar estes dados e registrar no FireBase
          state.user.name = user.name
          state.user.secondName = user.secondName
        })
        .catch((error) => {
          const erro = error.code
          console.log(error.code)
          if(erro === 'auth/email-already-in-use'){
            alert("EMAIL CADASTRADO")
          }else{

            alert('PREENCHA TODOS OS CAMPOS')
          }
        })
    }
  },
  actions: {

  },
  modules: {
  }
})
