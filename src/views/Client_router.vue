<template>
  <nav>
    <div class="container">
      <a
        class="d-flex align-items-center mb-md-0 me-md-1 text-dark text-decoration-none"
      >
        <ul class="nav nav-pills">
          <li class="TextLC">Личный кабинет клиента</li>
          <li class="nav-item">
            <router-link to="/client" class="nav-link"
              >test_user_list</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shedule_page" class="nav-link"
              >Запись на приём</router-link
            >
          </li>
        </ul>
      </a>
      <hr />
    </div>
  </nav>
  <router-view></router-view>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.TextLC {
  margin: 1px 1px 1px 10px;
  font-size: 1.5em;
  color: #2c3e50;
  text-align: left;
}
</style>
