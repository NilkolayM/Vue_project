<template>
  <nav class="row">
    <div class="container">
      <a class="text-decoration-none">
        <ul class="nav nav-pills">
          <li class="col order-first align-self-center TextLC">
            Личный кабинет клиента
          </li>
          <li class="nav-item col col-auto align-self-center">
            <router-link to="/client" class="nav-link">Клиент</router-link>
          </li>
          <li class="nav-item col col-auto align-self-center">
            <router-link to="/shedule_page" class="nav-link"
              >Запись на приём</router-link
            >
          </li>
          <li class="nav-item col-auto col align-self-center">
            <router-link to="/history_page" class="nav-link"
              >История посещений</router-link
            >
          </li>
          <li Class="col col-auto order-last align-self-center"><Exit /></li>
        </ul>
      </a>
      <hr />
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import ExitButton from "../Buttons/ExitButton.vue";

export default {
  components: {
    Exit: ExitButton,
  },
};
</script>

<style>
.TextLC {
  font-size: 1em;
  color: #2c3e50;
}
</style>
