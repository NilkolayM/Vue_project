import { createRouter, createWebHistory } from "vue-router";
import News_page from "../views/News_page.vue";
import Autorization_page from "../views/Autorization_page.vue";
import Client_page from "../views/Client_page.vue";
import Shedule_page from "../views/Shedule_page.vue";
import Client_router from "../views/Client_router.vue";

const routes = [
  {
    path: "/",
    name: "news",
    component: News_page,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutCompany.vue"),
  },
  {
    path: "/autorization_page",
    name: "autorization_page",
    component: Autorization_page,
  },
  {
    path: "/client",
    name: "client_router",
    component: Client_router,
    children: [
      {
        path: "",
        name: "client_page",
        component: Client_page,
      },
      {
        path: "/shedule_page",
        name: "shedule_page",
        component: Shedule_page,
      },
    ],
  },
];

const router1 = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router1;
