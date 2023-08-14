import linksApi from "@/api/linksApi";
import { createFormData } from "@/utils/formData";

export default {
  async getLinks() {
    try {
      const { data } = await linksApi.getLinks();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async setLinks(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await linksApi.setLinks(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
