import api from ".";

export default {
  getProfile() {
    return api.get("/profile");
  },
  setProfile(payload: any) {
    return api.post("/profile", payload);
  },
};
