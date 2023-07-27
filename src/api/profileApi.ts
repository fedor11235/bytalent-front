import api from ".";

export default {
  getProfile() {
    return api.get("/profile");
  },
};
