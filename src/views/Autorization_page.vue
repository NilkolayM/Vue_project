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
        <button
          class="w-50 btn btn-lg btn-primary"
          type="button"
          v-on:click="LoggingIn()"
        >
          Вход
        </button>
        <div id="wMessage" v-if="warning != ''" :key="warning">
          <br />
          <label>{{ warning }}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { AutorizationLink } from "../store/linksAPI.js";

const wu = "not_a_user";
const wp = "wrong_password";

export default {
  data() {
    return {
      warning: "",
    };
  },
  components: {},
  methods: {
    LoggingIn() {
      var query =
        "?" +
        new URLSearchParams({
          login: document.getElementById("IntegerInput").value,
          password: document.getElementById("floatingPassword").value,
        });

      axios
        .get(AutorizationLink + query)
        .then((res) => {
          switch (res.data) {
            case wu:
              {
                this.warning = "Пользователь не найден";
              }
              break;
            case wp:
              {
                this.warning = "Неверный пароль";
              }
              break;
            default:
              {
                localStorage.setItem("token", res.data[0].answer);
                localStorage.setItem("role", res.data[0].role);
                this.$router.push({ name: "client_router" });
              }
              break;
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

#wMessage {
  font-size: 1em;
  color: #d80723;
}
</style>
