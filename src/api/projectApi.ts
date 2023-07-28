import api from ".";

export default {
  getActiveProjects() {
    return api.get("/project/active");
  },
  orderVisualization(payload: FormData) {
    return api.post("/project/order", payload);
  },
};
