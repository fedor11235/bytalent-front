import api from ".";

export default {
  getSecurity() {
    return api.get("/security");
  },
};
