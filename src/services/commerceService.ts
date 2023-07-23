import commerceApi from "@/api/commerceApi";

export default {
  async getCommerce() {
    try {
      const { data } = await commerceApi.getCommerce();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
