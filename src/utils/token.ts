import api from "@/api";

export function setToken() {
  api.interceptors.request.use(
    (config) => {
      if (config.headers) {
        const token = window.localStorage.getItem("token");
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => error
  );
}
