import { createRouter, createWebHashHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/post-it/IndexView.vue");
    },
  },
  {
    path: "/notes/:id",
    name: "notes",
    component: function () {
      return import("../views/post-it/IndexViews.vue");
    },
  },
  {
    path: "/update/:id",
    name: "update",
    component: function () {
      return import("../views/post-it/UpdateView.vue");
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/create",
    name: "create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import("../views/post-it/CreateAds.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
