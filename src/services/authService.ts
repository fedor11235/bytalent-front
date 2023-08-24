import authApi from "@/api/authApi";
import { createFormData } from "@/utils/formData";

export default {
  async userLogin(payload: any, nextPage: () => void) {
    try {
      const formData = createFormData(payload);
      const { data } = await authApi.userLogin(formData);
      window.localStorage.setItem("token", data.access_token);
      nextPage();
    } catch (e) {
      console.error(e);
    }
  },
  async registrationTelegramUser(payload: any, nextPage: () => void) {
    try {
      const formData = createFormData(payload);
      const { data } = await authApi.registrationTelegramUser(formData);
      window.localStorage.setItem("token", data.access_token);
      nextPage();
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
