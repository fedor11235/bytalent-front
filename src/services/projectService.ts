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
  async getBackgrounds() {
    try {
      const { data } = await projectApi.getBackgrounds();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async postBackgrounds(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.postBackgrounds(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async uploadFileProject(projectId: number, payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.uploadFileProject(projectId, formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async deleteBackgrounds(id: number) {
    try {
      const { data } = await projectApi.deleteBackgrounds(id);
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
