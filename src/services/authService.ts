import authApi from "@/api/authApi";

export default {
  async userLogin(payload: any) {
    try {
      const response = await authApi.userLogin(payload);
      // window.localStorage.setItem('token', response.token)
      console.log(response);
    } catch (e) {
      console.error("user info unavailable", e);
    }
  },
};
