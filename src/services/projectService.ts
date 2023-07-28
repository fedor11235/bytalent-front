import projectApi from "@/api/projectApi";
import { createFormData } from "@/utils/formData";

export default {
  async getActiveProjects() {
    try {
      const { data } = await projectApi.getActiveProjects();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async orderVisualization(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.orderVisualization(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
