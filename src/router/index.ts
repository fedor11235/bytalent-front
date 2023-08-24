import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { setToken } from "@/utils/token";
import authService from "@/services/authService";
import StartView from "@/views/StartView.vue";
import VisualizationView from "@/views/VisualizationView.vue";
import ErrorView from "@/views/ErrorView.vue";
// import SettingsView from "@/views/SettingsView.vue";
import NewLavelView from "@/views/NewLavelView.vue";
import AppView from "@/views/AppView.vue";
import StreamingView from "@/views/StreamingView.vue";
import SearchView from "@/views/SearchView.vue";
// import ProfileView from "@/views/ProfileView.vue";
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "start" },
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
  },
  {
    path: "/visualization",
    name: "visualization",
    component: VisualizationView,
  },
  {
    path: "/new-lavel",
    name: "new-lavel",
    component: NewLavelView,
    meta: {
      auth: true,
    },
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
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      login: true,
    },
  },
  {
    path: "/login/:nextPage",
    name: "login-redirect",
    component: LoginView,
    props: true,
    meta: {
      login: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  setToken();
  const check = await authService.checkToken();

  if (to.meta?.auth) {
    if (check) {
      next();
    } else {
      next({ name: "login" });
    }
  } else if (to.meta?.login) {
    if (!check) {
      next();
    } else {
      next({ name: "start" });
    }
  } else {
    next();
  }
});

export default router;
