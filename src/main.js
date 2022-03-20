import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVM2PDu2mOsiGKGsxjODWrecbSeNJ8ik",
  authDomain: "lokalizi.firebaseapp.com",
  projectId: "lokalizi",
  storageBucket: "lokalizi.appspot.com",
  messagingSenderId: "839840930227",
  appId: "1:839840930227:web:668509cdb566c16b9453c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
