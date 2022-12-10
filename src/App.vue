<template>
  <nav>
    <div class="container">
      <a
        href="/"
        class="d-flex align-items-center mb-2 mb-md-2 me-md-auto text-dark text-decoration-none"
      >
      </a>
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
    </div>
  </nav>
  <hr />
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

.ClName {
  margin: 1px 1px 1px 20px;
  font-size: 2em;
  color: #2c3e50;
  text-align: left;
}
</style>
