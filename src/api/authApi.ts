import api from "./index";

export default {
  userLogin(payload: any) {
    const { login, password } = payload;
    const formData = new FormData();
    formData.append("login", login);
    formData.append("password", password);
    return api.post("/auth/login", formData);
  },
  checkToken() {
    return api.get("/auth/check");
  },
};
