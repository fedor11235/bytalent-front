import api from ".";

export default {
  getLinks() {
    return api.get("/links");
  },
};
