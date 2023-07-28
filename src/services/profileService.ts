import profileApi from "@/api/profileApi";
import { createFormData } from "@/utils/formData";

type PayloadSetProfile = {
  name?: string;
  surname?: string;
  organization?: string;
  position?: string;
  phone?: string;
  email?: string;
};

type KeySetProfile =
  | "name"
  | "surname"
  | "organization"
  | "position"
  | "phone"
  | "email";

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
