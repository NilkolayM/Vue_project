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
import MyToken from "../store/token.js";
import Redirect from "../store/RoleRedirect.js";

export default {
  data() {
    return {
      warning: "",
    };
  },
  components: {},
  methods: {
    LoggingIn() {
      MyToken.LoggingIn(
        document.getElementById("IntegerInput").value,
        document.getElementById("floatingPassword").value
      ).then((res) => {
        switch (res) {
          case "Пользователь не найден":
            {
              this.warning = "Пользователь не найден";
            }
            break;
          case "Неверный пароль":
            {
              this.warning = "Неверный пароль";
            }
            break;
          default:
            {
              Redirect(this.$router);
            }
            break;
        }
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
