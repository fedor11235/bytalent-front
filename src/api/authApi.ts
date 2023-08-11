import api from ".";

export default {
  userLogin(formData: FormData) {
    return api.post("/auth/login", formData);
  },
  registrationTelegramUser(formData: FormData) {
    return api.post("/auth/telegram", formData);
  },
  checkToken() {
    return api.get("/auth/check");
  },
};
