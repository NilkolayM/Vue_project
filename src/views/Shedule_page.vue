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
        <tbody :key="UpdateIt">
          <tr v-for="cell in Cells" :key="cell.Date_time">
            <td>{{ cell.Date_time }}</td>
            <td>{{ cell.Place }}</td>
            <td>{{ cell.User_name }}</td>
            <td>
              <button
                id="bx"
                class="w-40 btn btn-primary"
                type="button"
                @click="CellClicked(cell.Cell_ID)"
              >
                {{ GetCellStatus(cell.Status, cell.Client_ID) }}
              </button>
            </td>
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
      UpdateIt: false,
    };
  },
  components: {},
  watch: {},
  methods: {
    GetCellStatus(status, ID) {
      if (status == 0) return "Записаться";
      else if (localStorage.getItem("token") === ID) return "Отменить";
      else return "Недоступно";
    },
    RefreshCells() {
      axios
        .get("http://192.168.0.112:5282/api/Shedule")
        .then((res) => {
          this.Cells = res.data;
          this.UpdateTt != this.UpdateTt;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CellClicked(ID) {
      axios
        .put(
          "http://192.168.0.112:5282/api/Shedule?user1=" +
            localStorage.getItem("token") +
            "&cell1=" +
            ID
        )
        .then((res) => {
          switch (res.data) {
            case "sign_success":
              this.RefreshCells();
              break;
            case "unsign_success":
              this.RefreshCells();
              break;
            case "wrong_user":
              alert("Не пользователь");
              break;
            case "cant_sign":
              alert("Записан кто то ещё");
              break;
            default:
              alert("Error!");
              break;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
  mounted: function () {
    this.RefreshCells();
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
