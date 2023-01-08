<template>
  <nav class="row">
    <div class="container">
      <a class="d-flex text-decoration-none">
        <div class="ClName col order-first">ОртоН</div>
        <ul class="nav col order-last nav-pills col-md-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Новости</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">О компании</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/autorization_page" class="nav-link"
              >Личный кабинет</router-link
            >
          </li>
        </ul>
      </a>
      <hr />
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: stretch;
  color: #2c3e50;
}

.nav-item {
  margin: 0px 0px 0px 0px;
  font-weight: bold;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.ClName {
  font-size: 1.5em;
  color: #2c3e50;
  text-align: left;
}
</style>
