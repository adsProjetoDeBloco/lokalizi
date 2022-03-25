<template>
  <div class="container">
    <form @submit.prevent="submit">
      <div class="nome-sobrenome">
        <label>
          <p>Primeiro Nome</p>
          <input class="in-nome" type="name" v-model="user.name" />
        </label>
        <label>
          <p>Sobrenome</p>
          <input
            class="in-sobrenome"
            type="sobrenome"
            v-model="user.secondName"
          />
        </label>
      </div>

      <div class="email-senha">
        <label for="email">Email</label>
        <input class="in-email-pass" type="email" v-model="user.email" />
        <label for="password">Senha</label>
        <input class="in-email-pass" type="password" v-model="user.password" />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
    submit: {
      required: true,
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
}
.nome-sobrenome {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
}
.email-senha {
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 15px;
}

label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}
input {
  display: block;
  border-radius: 10px;
  margin: 4px auto;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
}
.in-nome {
  width: 150px;
  height: 36px;
}
.in-sobrenome {
  width: 150px;
  height: 36px;
}
.in-email-pass {
  width: 100%;
  height: 36px;
}
button {
  width: 323px;
  height: 38px;
  background: #480048;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-left: 31px;
  color: #FFFFFF;
}
</style>