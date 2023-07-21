import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import VisualizationFirstView from "@/views/VisualizationFirstView.vue";
import VisualizationSecondView from "@/views/VisualizationSecondView.vue";
import ErrorView from "@/views/ErrorView.vue";
import SettingsView from "@/views/SettingsView.vue";
import NewLavelView from "@/views/NewLavelView.vue";
import AppView from "@/views/AppView.vue";
import StreamingView from "@/views/StreamingView.vue";
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "visualization-first" },
  },
  {
    path: "/bytalent-front/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/bytalent-front/visualization-first",
    name: "visualization-first",
    component: VisualizationFirstView,
  },
  {
    path: "/bytalent-front/visualization-second",
    name: "visualization-second",
    component: VisualizationSecondView,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "error",
  //   component: ErrorView,
  // },
  {
    path: "/bytalent-front/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/bytalent-front/new-lavel",
    name: "new-lavel",
    component: NewLavelView,
  },
  {
    path: "/bytalent-front/app",
    name: "app",
    component: AppView,
  },
  {
    path: "/bytalent-front/streaming",
    name: "streaming",
    component: StreamingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
