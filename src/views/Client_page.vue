<template>
  <div class="Client_page">
    <div class="row offset-md-1">
      <ul class="list-group col col-md-3 order-first" :key="user">
        <header class="TextHeader">Клиент</header>
        <li class="list-group-item">{{ user.User_Name }}</li>
        <li class="list-group-item">{{ user.User_email }}</li>
        <li class="list-group-item">{{ user.User_Phone_num }}</li>
      </ul>
      <ul class="list-group col col-md-5 offset-md-3 order-last" :key="user">
        <header class="TextHeader">Уведомления</header>
        <a
          href="#"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Уведомление №1</h5>
            <small>14.01.23</small>
          </div>
          <p class="mb-1">Напоминает о записи к врачу.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Уведомление №2</h5>
            <small class="text-muted"></small>
          </div>
          <p class="mb-1">Советует сделать что-то.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Уведомление №3</h5>
          </div>
          <p class="mb-1">Советует сделать что-то другое.</p>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ClientInfo } from "../store/linksAPI";

export default {
  el: "page_client",
  data() {
    return {
      user: { User_Name: " ", User_email: " ", User_Phone_num: " " },
    };
  },
  components: {},
  methods: {},
  computed: {},
  beforeCreate: function () {
    var query =
      "?" +
      new URLSearchParams({
        token: localStorage.getItem("token"),
      });
    axios
      .get(ClientInfo + query)
      .then((res) => {
        this.user = res.data[0];
        localStorage.setItem("user", res.data[0].ID);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.TextHeader {
  font-size: 150%;
  text-align: start;
}
.list-group {
  border-color: #2c3e50;
  font-size: 100%;
  text-align: start;
}
.list-group-item {
  font-size: 120%;
  text-align: start;
}
.notifications {
  font-size: 120%;
  text-align: center;
}

#Client_page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
