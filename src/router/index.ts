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
import AdminHomeView from "@/views/AdminHomeView.vue";
import AdminLoginView from "@/views/AdminLoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "start" },
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
    meta: {
      start: true,
    },
  },
  {
    path: "/project/:idProject",
    name: "project-id",
    component: VisualizationView,
    props: true,
  },
  {
    path: "/project",
    name: "project",
    component: VisualizationView,
  },
  {
    path: "/new-lavel/:idProject",
    name: "new-lavel",
    component: NewLavelView,
    props: true,
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
    path: "/admin",
    redirect: { name: "admin-home" },
  },
  {
    path: "/admin/home",
    name: "admin-home",
    component: AdminHomeView,
    meta: {
      adminAuth: true,
    },
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLoginView,
    meta: {
      adminLogin: true,
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
  const enter = window.localStorage.getItem("enter");

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
      next({ name: "app" });
    }
  } else if (to.meta?.start) {
    if (!check) {
      next();
    } else {
      next({ name: "app" });
    }
  } else if (to.meta?.adminAuth) {
    if (enter === "enabled") {
      next();
    } else {
      next({ name: "admin-login" });
    }
  } else if (to.meta?.adminLogin) {
    if (enter !== "enabled") {
      next();
    } else {
      next({ name: "admin-home" });
    }
  } else {
    next();
  }
});

export default router;
