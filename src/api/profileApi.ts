import api from ".";

export default {
  getProfile() {
    return api.get("/profile");
  },
  setProfile(payload: FormData) {
    return api.post("/profile", payload);
  },
};
