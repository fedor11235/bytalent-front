import profileApi from "@/api/profileApi";

export default {
  async getProfile() {
    try {
      const { data } = await profileApi.getProfile();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
