import api from ".";

export default {
  getActiveProjects() {
    return api.get("/project/active");
  },
};
