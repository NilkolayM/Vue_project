<template>
  <nav>
    <div class="container">
      <a
        class="d-flex align-items-center mb-md-0 me-md-1 text-dark text-decoration-none"
      >
        <ul class="nav nav-pills">
          <li class="TextLC">Личный кабинет Администратора</li>
        </ul>
      </a>
      <hr />
    </div>
  </nav>
  <router-view></router-view>
</template>

<script></script>

<style>
nav {
  padding: 5px;
}

.TextLC {
  margin: 1px 1px 1px 10px;
  font-size: 1.5em;
  color: #2c3e50;
  text-align: left;
}
</style>
