<template>
  <div class="autorization_page" id="AutPage">
    <h1>Авторизация</h1>
    <div class="col-md-10 mx-auto col-lg-5">
      <form class="p-4 p-md-5 border rounded-3 bg-light" id="APdata">
        <div class="form-floating mb-3">
          <input
            type="Login"
            class="form-control"
            id="IntegerInput"
            placeholder="Login"
          />
          <label for="floatingInput">Логин</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="Password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Пароль</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Запомнить пароль
          </label>
        </div>
        <button
          class="w-50 btn btn-lg btn-primary"
          type="button"
          v-on:click="LoggingIn()"
        >
          Вход
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const s = "not_a_user";

export default {
  data() {},
  components: {},
  methods: {
    LoggingIn() {
      axios
        .get(
          "http://192.168.0.112:5282/api/User/UserExist?u_password=" +
            document.getElementById("floatingPassword").value +
            "&u_login=" +
            document.getElementById("IntegerInput").value
        )
        .then((res) => {
          if (res.data != s) {
            localStorage.setItem("token", res.data);
            this.$router.push({ name: "client_page" });
          } else {
            alert("Нет такого пользователя");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
};
</script>

<style scoped>
#AutPage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
