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
  async getAllNumberProjects() {
    try {
      const { data } = await projectApi.getAllNumberProjects();
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
      const formData = new FormData();
      // formData.append('files', payload);
      for (const index in payload) {
        formData.append("files", payload[index]);
      }
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
  async createProject(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.createProject(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
