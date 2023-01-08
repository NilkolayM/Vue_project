<template>
  <div class="Shedule_page d-flex justify-content-evenly">
    <div class="container border">
      <ul class="list-group row">
        <header class="TextHeader p-2">История посещений</header>
        <li class="list-group-item col">
          <ul class="list-group row">
            <header class="HistoryHeader">Посещение #2</header>
            <li class="list-group-item col">Дата: 12-03-22</li>
            <li class="list-group-item col">Врач: Иванов Иван Иванович</li>
            <li class="list-group-item col">Процедуры:</li>
            <li class="list-group-item col">
              Текст описывающий ход выполнения процедур<br /><br /><br /><br />
            </li>
          </ul>
        </li>
        <li class="list-group-item col">
          <ul class="list-group row">
            <header class="HistoryHeader">Посещение #1</header>
            <li class="list-group-item col">Дата: 22-01-22</li>
            <li class="list-group-item col">Врач: Иванов Иван Иванович</li>
            <li class="list-group-item col">Обследование:</li>
            <li class="list-group-item col">
              Текст описывающий процесс обследования<br /><br /><br /><br />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script></script>

<style>
.HistoryHeader {
  font-size: 100%;
  text-align: start;
}
</style>
