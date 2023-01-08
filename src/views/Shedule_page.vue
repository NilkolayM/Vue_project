<template>
  <div class="Shedule_page d-flex justify-content-evenly">
    <div class="container border">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Время</th>
            <th>Место</th>
            <th>Специалист</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-group-divider md-center" :key="UpdateIt">
          <tr v-for="cell in Cells" :key="cell.Date_time">
            <td nowrap>{{ cell.Date_time.slice(5, 10) }}</td>
            <td>{{ cell.Date_time.slice(11, 16) }}</td>
            <td>{{ cell.Place }}</td>
            <td>{{ cell.User_name }}</td>
            <td>
              <button
                v-if="
                  'Недоступно' != GetCellStatus(cell.Status, cell.Client_ID)
                "
                id="bx"
                class="w-40 btn btn-primary btn-sm"
                type="button"
                @click="CellClicked(cell.Cell_ID)"
              >
                {{ GetCellStatus(cell.Status, cell.Client_ID) }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="container ButtonPageSelect">
        <div class="row align-items-center">
          <div class="col order-first">
            <button type="button" class="btn btn-primary btn-sm">
              На предыдущую страницу
            </button>
          </div>
          <div class="col order-last">
            <button type="button" class="btn btn-primary btn-sm">
              На следующую страницу
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { SheduleInfo, SheduleAssign } from "../store/linksAPI.js";

export default {
  el: "#page_shedule",
  data() {
    return {
      Cells: [],
      UpdateIt: false,
    };
  },
  watch: {},
  methods: {
    GetCellStatus(status, ID) {
      if (status == 0) return "Записаться";
      else if (localStorage.getItem("user") === ID) return "Отменить";
      else return "Недоступно";
    },
    RefreshCells() {
      axios
        .get(SheduleInfo)
        .then((res) => {
          this.Cells = res.data;
          this.UpdateIt != this.UpdateIt;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CellClicked(ID) {
      var query =
        "?" +
        new URLSearchParams({
          token: localStorage.getItem("token"),
          cell: ID,
        });
      axios
        .put(SheduleAssign + query)
        .then((res) => {
          switch (res.data.status) {
            case "sign_success":
              {
                localStorage.setItem("token", res.data.token);
              }
              break;
            case "unsign_success":
              {
                localStorage.setItem("token", res.data.token);
              }
              break;
            case "cant_sign":
              {
                localStorage.setItem("token", res.data.token);
                //alert("Записан кто то ещё");
              }
              break;
            default:
              this.$router.push({ name: "autorization_page" });
              break;
          }
          this.RefreshCells();
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

<style>
.ButtonPageSelect {
  width: auto;
  margin-bottom: 1%;
}

#Shedule_page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}
</style>
