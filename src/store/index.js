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
          console.log(error.code)
          alert(error.message)
        })
    }
  },
  actions: {

  },
  modules: {
  }
})
