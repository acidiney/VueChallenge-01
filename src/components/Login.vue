<template>
  <form v-on:submit.prevent="sendInformations">
    <div class="input-group">
      <i class="fas fa-envelope"></i>
      <input type="text" v-model="user.email" placeholder="E-mail">
    </div>
    <div class="input-group">
      <i class="fas fa-key"></i>
      <input type="password" v-model="user.password" placeholder="Password">
    </div>
    <p>Forget password?</p>
    <button>LOGIN</button>
    <p>Do not have account?
      <router-link v-bind:to="{name: 'Register'}">Register</router-link>
    </p>
  </form>
</template>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

form {
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 7vh;
}
input {
  background: #fff;
  border-radius: 50px;
  width: 100%;
  border: 0;
  height: 40px;
  font-weight: 500;
  margin-bottom: 5vh;
  box-sizing: border-box;
  padding-left: 12vw;
  box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.2);
}

input[type="password"] {
  margin-bottom: 1vh;
}

input:focus {
  outline: none;
}
.input-group {
  position: relative;
}
.fas {
  color: #999;
  position: absolute;
  left: 5%;
  top: 16%;
}
p {
  color: #999;
  margin: 0;
  padding: 0;
  text-align: right;
}

button {
  width: 100%;
  background: linear-gradient(to left, $base-orange-color, $alt-orange-color);
  border: 0;
  border-radius: 50px;
  padding: 15px;
  color: #fff;
  box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.2);
  font-weight: bolder;
  margin-top: 13vh;
}

a {
  color: $base-orange-color;
  text-decoration: none;
}

p:nth-last-child(1) {
  text-align: center;
  position: absolute;
  bottom: 30px;
  width: 100vw;
  margin: 0;
  left: 0;
}
</style>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      user: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    sendInformations: function() {
      console.log(this.user);
    }
  }
};
</script>
