<template>
  <div class="Client_page">
    <Exit></Exit>
    <div class="container">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Номер телефона</th>
            <th>Email</th>
            <th>ID пользователя</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.User_ID">
            <td>{{ user.User_Name }}</td>
            <td>{{ user.User_Phone_num }}</td>
            <td>{{ user.User_email }}</td>
            <td>{{ user.User_ID }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ExitButton from "./Buttons/ExitButton.vue";

export default {
  el: "page_client",
  data() {
    return {
      users: [],
      test_token: localStorage.getItem("token"),
    };
  },
  components: {
    Exit: ExitButton,
  },
  methods: {},
  computed: {},
  mounted: function () {
    axios
      .get("http://192.168.0.112:5282/api/User")
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
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
