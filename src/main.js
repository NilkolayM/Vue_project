/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "D:/vueJS/Vue_project/node_modules/@popperjs/core/lib";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");