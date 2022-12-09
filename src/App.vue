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
          <a href="/" class="nav-link">Новости</a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link">О компании</a>
        </li>
        <li class="nav-item">
          <a href="/autorization_page" class="nav-link">Личный кабинет</a>
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

nav a.router-link-exact-active {
  color: #42b983;
}

.ClName {
  margin: 1px 1px 1px 20px;
  font-size: 2em;
  color: #2c3e50;
  text-align: left;
}
</style>
