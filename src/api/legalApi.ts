import api from ".";

export default {
  getLegal() {
    return api.get("/legal");
  },
};
