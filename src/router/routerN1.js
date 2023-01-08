import { createRouter, createWebHistory } from "vue-router";
import News_page from "../views/News_page.vue";
import Autorization_page from "../views/Autorization_page.vue";
import Client_page from "../views/Client_page.vue";
import Shedule_page from "../views/Shedule_page.vue";
import Client_router from "../views/Routers/Client_router.vue";
import SA_router from "../views/Routers/SA_router.vue";
import A_router from "../views/Routers/A_router.vue";
import D_router from "../views/Routers/D_router.vue";
import S_router from "../views/Routers/S_router.vue";
import MyToken from "../store/token.js";
import Redirect from "../store/RoleRedirect.js";
import history_page from "../views/history_page.vue";

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
      {
        path: "/history_page",
        name: "history_page",
        component: history_page,
      },
    ],
  },
  {
    path: "/SA",
    name: "SA_router",
    component: SA_router,
  },
  {
    path: "/A",
    name: "A_router",
    component: A_router,
  },
  {
    path: "/S",
    name: "S_router",
    component: S_router,
  },
  {
    path: "/D",
    name: "D_router",
    component: D_router,
  },
];

const router1 = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router1.beforeEach((to, from, next) => {
  switch (to.name) {
    case "about":
      {
        next();
      }
      break;
    case "news":
      {
        next();
      }
      break;
    case "autorization_page":
      {
        if (from.name != "autorization_page") {
          MyToken.UpdateToken().then((res) => {
            if (res == "Успех") {
              Redirect(router1);
            } else next();
          });
        } else {
          next(false);
        }
      }
      break;
    default:
      {
        MyToken.UpdateToken().then((res) => {
          if (res == "Успех") {
            next();
          } else {
            next({ name: "autorization_page" });
          }
        });
      }
      break;
  }
});

export default router1;
