import api from ".";

export default {
  getAllProjects() {
    return api.get("/project/all");
  },
  getActiveProjects() {
    return api.get("/project/active");
  },
  getAllNumberProjects() {
    return api.get("/project/number");
  },
  uploadFileProject(id: number, payload: FormData) {
    return api.post(`/project/upload/${id}`, payload);
  },
  getBackgrounds() {
    return api.get("/project/backgrounds");
  },
  postBackgrounds(payload: FormData) {
    return api.post("/project/backgrounds", payload);
  },
  deleteBackgrounds(id: number) {
    return api.delete(`/project/backgrounds/${id}`);
  },
  createProject(payload: FormData) {
    return api.post("/project/create", payload);
  },
  updateProject(projectId: any, payload: FormData) {
    return api.post(`/project/update/${projectId}`, payload);
  },
};
