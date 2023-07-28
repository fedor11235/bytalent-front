import api from ".";

export default {
  getLegal() {
    return api.get("/legal");
  },
  setLegal(payload: FormData) {
    return api.post("/legal", payload);
  },
};
