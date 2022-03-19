<template>
  <div class="container">
    <img src="../assets/lokalizi.png" alt="" />
    <div class="formulario">
      <form @onSubmit.prevent="">
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </form>
      <div class="midias">
        <ul>
          <li>Facebook</li>
          <li>Google</li>
          <li>Outlook</li>
        </ul>
      </div>
      <div class="dificuldade">
        <p>Dificuldade de logar? Clique Aqui</p>
      </div>
      <div class="cadastre-se">
        <p>Não possui conta? Crie Agora</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&display=swap");

.login-page {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 200px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  border-radius: 15px;
  margin: 40px auto;
  width: 275px;
  height: 55px;
  background: rgba(240, 114, 65, 0.61);
  border: none;
}
button {
  width: 153px;
  height: 60px;
  border-radius: 15px;
  background: rgba(96, 24, 72, 0.86);
  border: none;
  color: #ffffff;
  font-size: 24px;
  line-height: 29px;
  font-family: "Advent Pro";
  font-style: normal;
  margin-top: 70px;
}
ul {
  display: flex;
}
p {
  font-family: "Advent Pro";
}
</style>