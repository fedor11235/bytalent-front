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
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/visualization-first",
    name: "visualization-first",
    component: VisualizationFirstView,
  },
  {
    path: "/visualization-second",
    name: "visualization-second",
    component: VisualizationSecondView,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "error",
  //   component: ErrorView,
  // },
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
    path: "/streaming",
    name: "streaming",
    component: StreamingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
