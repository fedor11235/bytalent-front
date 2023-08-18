import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import api from "@/api";
import authService from "@/services/authService";
import StartView from "@/views/StartView.vue";
import VisualizationView from "@/views/VisualizationView.vue";
import ErrorView from "@/views/ErrorView.vue";
import SettingsView from "@/views/SettingsView.vue";
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
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/visualization",
    name: "visualization",
    component: VisualizationView,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
    meta: {
      auth: true,
    },
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
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/streaming",
    name: "streaming",
    component: StreamingView,
    // meta: {
    //   auth: true,
    // },
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: ProfileView,
  //   meta: {
  //     auth: true,
  //   },
  // },
  {
    path: "/search",
    name: "search",
    component: SearchView,
    meta: {
      auth: true,
    },
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
  const token = window.localStorage.getItem("token");
  api.interceptors.request.use(
    (config) => {
      if (config.headers) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => error
  );

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
