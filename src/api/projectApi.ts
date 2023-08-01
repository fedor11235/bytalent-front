import api from ".";

export default {
  getActiveProjects() {
    return api.get("/project/active");
  },
  getBackgrounds() {
    return api.get("/project/backgrounds");
  },
  orderVisualization(payload: FormData) {
    return api.post("/project/order", payload);
  },
};
