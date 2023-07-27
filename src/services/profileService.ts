import profileApi from "@/api/profileApi";

export default {
  async getProfile() {
    try {
      const { data } = await profileApi.getProfile();
      console.log('!!!', data)
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};

