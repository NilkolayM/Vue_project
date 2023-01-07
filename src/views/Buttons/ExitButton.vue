<template>
  <div class="ExitButton">
    <button id="bx" class="w-40 btn btn-primary" type="button" @click="Exit()">
      Выход
    </button>
  </div>
</template>
<script>
import { ExitLink } from "../../store/linksAPI";
import axios from "axios";

export default {
  el: "ExitButton",
  data() {
    return {};
  },
  methods: {
    Exit() {
      var query =
        "?" +
        new URLSearchParams({
          token: localStorage.getItem("token"),
        });
      axios
        .delete(ExitLink + query)
        .then()
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          this.$router.push({ name: "autorization_page" });
        });
    },
  },
};
</script>

<style scoped>
#Client_page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}
</style>
