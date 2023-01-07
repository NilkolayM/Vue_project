<template>
  <div class="ExitButton">
    <button
      id="ExtBtn"
      class="w-40 btn btn-primary"
      type="button btn-outline-success"
      @click="Exit()"
    >
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

<style>
.ExitButton {
  float: right;
}
#ExtBtn {
  float: right;
}
</style>
