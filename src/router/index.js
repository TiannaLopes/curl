import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LogInView from "@/views/LogInView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import UserAccountView from "@/views/UserAccountView.vue";
const routes = [
  {
    path: "/home",
    component: HomeView,
    name: "home",
  },
    {
    path: "/account",
    component: UserAccountView,
    name: "account",
  },
  {
    path: "/login",
    component: LogInView,
    name: "login",
  },
  {
    path: "/about-us",
    component: AboutUsView,
    name: "about-us",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
