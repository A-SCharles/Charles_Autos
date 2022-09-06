import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/ContactsView.vue"),
  },
  {
    path: "/contactUs",
    name: "contactsUs",
    component: () => import("../views/ContactUsView.vue"),
  },
  {
    path: "/all",
    name: "all",
    component: () => import("../views/Allproducts.vue"),
    props: true
  },
  {
    path: "/all/:id",
    name: "single",
    component: () => import("../views/carDetail.vue"),
    props: true,
  },
  {
    path: "/admin/all/:id",
    name: "singleAdmin",
    component: () => import("../views/singlle.vue"),
    props: true,
  },
  {
    path: "/profile/",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
