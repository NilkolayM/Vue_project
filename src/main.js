/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router1 from "./router/routerN1";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core/lib";
import "bootstrap";

createApp(App).use(store).use(router1).mount("#app");
