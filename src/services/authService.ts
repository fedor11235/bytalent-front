import api from "@/api";
import authApi from "@/api/authApi";
import { useRouter } from "vue-router";

const router = useRouter();

export default {
  async userLogin(payload: any) {
    try {
      const { data } = await authApi.userLogin(payload);
      window.localStorage.setItem("token", data.access_token);
      api.interceptors.request.use(
        (config) => {
          if (config.headers) {
            config.headers["Authorization"] = "Bearer " + data.access_token;
          }
          return config;
        },
        (error) => error
      );
      router.push({ name: "visualization-first" });
    } catch (e) {
      console.error(e);
    }
  },
  async checkToken() {
    try {
      await authApi.checkToken();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
};