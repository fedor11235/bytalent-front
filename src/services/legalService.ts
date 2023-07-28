import legalApi from "@/api/legalApi";
import { createFormData } from "@/utils/formData";

export default {
  async getlegal() {
    try {
      const { data } = await legalApi.getLegal();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async setLegal(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await legalApi.setLegal(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
