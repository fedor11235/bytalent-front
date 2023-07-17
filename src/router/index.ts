import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorView from "../views/ErrorView.vue";
import SettingsView from "../views/SettingsView.vue";
import NewLavelView from "../views/NewLavelView.vue";
import AppView from "../views/AppView.vue";
import StremingView from "../views/StremingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/new-lavel",
    name: "new-lavel",
    component: NewLavelView,
  },
  {
    path: "/app",
    name: "app",
    component: AppView,
  },
  {
    path: "/streming",
    name: "streming",
    component: StremingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
