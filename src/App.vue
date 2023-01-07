<template>
  <nav>
    <div class="container">
      <a
        class="d-flex align-items-center mb-md-0 me-md-1 text-dark text-decoration-none"
      >
        <header class="ClName">ОртоН</header>
        <ul class="nav nav-pills">
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
  color: #2c3e50;
}

.nav-item {
  margin: 2px 5px 0px 5px;
  font-weight: bold;
  color: #2c3e50;
}

.ClName {
  margin: 1px 1px 10px 10px;
  font-size: 1.5em;
  color: #2c3e50;
  text-align: left;
}
</style>
