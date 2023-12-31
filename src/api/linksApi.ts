import api from ".";

export default {
  getLinks() {
    return api.get("/links");
  },
  setLinks(payload: FormData) {
    return api.post("/links", payload);
  },
};
