import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'

export default createStore({
  state: {
    email: {},
    password: {}
  },
  getters: {
  },
  mutations: {
    CADASTRAR_NOVO_USUARIO(state, user) {

      createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then((res) => {
          console.log("Registrado com Sucesso!")
          router.push({ name: 'home' })
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
        })
      state.email = user.email
      state.password = user.password

    }
  },
  actions: {

  },
  modules: {
  }
})
