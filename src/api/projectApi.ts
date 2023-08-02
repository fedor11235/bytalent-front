import api from ".";

export default {
  getActiveProjects() {
    return api.get("/project/active");
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
