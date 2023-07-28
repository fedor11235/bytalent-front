import api from ".";

export default {
  userLogin(formData: FormData) {
    return api.post("/auth/login", formData);
  },
  checkToken() {
    return api.get("/auth/check");
  },
};
