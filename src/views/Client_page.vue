<template>
  <div class="Client_page">
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted: function () {
    axios
      .get("http://localhost:61815/api/User")
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
