import profileApi from "@/api/profileApi";
import { createFormData } from "@/utils/formData";

export default {
  async getProfile() {
    try {
      const { data } = await profileApi.getProfile();
      return data;
    } catch (e) {
      console.error(e);
    }
  },

  async setProfile(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await profileApi.setProfile(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
