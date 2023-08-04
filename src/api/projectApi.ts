import api from ".";

export default {
  getActiveProjects() {
    return api.get("/project/active");
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
  orderVisualization(payload: FormData) {
    return api.post("/project/order", payload);
  },
};
