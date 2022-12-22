<template>
  <div class="Shedule_page">
    <div class="container">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>Время</th>
            <th>Место</th>
            <th>Специалист</th>
            <th>Состояние</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cell in Cells" :key="cell.Date_time">
            <td>{{ cell.Date_time }}</td>
            <td>{{ cell.Place }}</td>
            <td>{{ cell.User_name }}</td>
            <td>{{ cell.Status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  el: "#page1",
  data() {
    return {
      Cells: [],
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted: function () {
    axios
      .get("http://192.168.0.112:5282/api/Shedule")
      .then((res) => {
        this.Cells = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#Shedule_page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}
</style>
