import securityApi from "@/api/securityApi";

export default {
  async getSecurity() {
    try {
      const { data } = await securityApi.getSecurity();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
