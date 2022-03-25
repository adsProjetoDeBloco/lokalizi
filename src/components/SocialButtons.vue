<template>
  <ul>
    <li>
      <img
        src="../assets/logos_facebook.png"
        alt=""
        @click.prevent="loginWithFacebook"
      />
    </li>
    <li>
      <img
        src="../assets/logos_google-icon.png"
        alt=""
        @click.prevent="loginWithGoolge"
      />
    </li>
    <li>
      <img
        src="../assets/vscode-icons_file-type-outlook.png"
        alt=""
        @click.prevent="outlook"
      />
    </li>
  </ul>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
export default {


    methods:{
      loginWithGoolge() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginWithFacebook() {
      const provider = new FacebookAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    }
};
</script>

<style>
ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 73px;
}
li{
  margin: 8.66px;
  cursor: pointer;
}
</style>