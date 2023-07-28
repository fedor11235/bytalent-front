import api from "@/api";
import authApi from "@/api/authApi";
import { createFormData } from "@/utils/formData";

export default {
  async userLogin(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await authApi.userLogin(formData);
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
      location.reload();
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
