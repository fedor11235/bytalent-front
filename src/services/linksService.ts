import linksApi from "@/api/linksApi";

export default {
  async getLinks() {
    try {
      const { data } = await linksApi.getLinks();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
