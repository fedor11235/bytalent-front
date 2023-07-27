import legalApi from "@/api/legalApi";

export default {
  async getlegal() {
    try {
      const { data } = await legalApi.getLegal();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
