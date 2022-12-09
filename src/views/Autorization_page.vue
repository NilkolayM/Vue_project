<template>
  <div class="autorization_page" id="AutPage">
    <h1>Авторизация</h1>
    <div class="col-md-10 mx-auto col-lg-5">
      <form
        class="p-4 p-md-5 border rounded-3 bg-light"
        id="APdata"
        action
        variables.API_URL_IS_USER_EXISTS
        @submit="LoggingIn"
        method="get"
      >
        <div class="form-floating mb-3">
          <input
            type="Login"
            class="form-control"
            id="IntegerInput"
            v-model="Login"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Логин</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="Password"
          />
          <label for="floatingPassword">Пароль</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Запомнить пароль
          </label>
        </div>
        <button class="w-50 btn btn-lg btn-primary" type="submit">Вход</button>
      </form>
    </div>
    <text>{{ out_text }}</text>
  </div>
</template>

<script>
export default {
  el: "#APdata",
  data() {
    return {
      Login: null,
      Password: null,
    };
  },
  components: {},
  methods: {
    LoggingIn() {
      this.$router.push({ name: "client_page" });
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
