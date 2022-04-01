import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      requiresAuth: false //trocado para falso para facilitar o desenvolvimento
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Register.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "home" */ '../views/Search.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Este metodo confere se o usuario já logou, o estado permanece logado mesmo apos atualizar a pagina
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), 
    (user) =>{
      removeListener();
      resolve(user)
    },

    reject)
  })
}

//Apos logado libera acesso as paginas com requiresAuth: true
router.beforeEach( async (to, from, next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next()
    }else{
      //caso não esteja logado retornar para a pagina de login
      alert("Faça Login")
      next("/")
    }
  }else{
    next()
  }
})

export default router
