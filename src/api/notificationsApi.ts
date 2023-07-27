import api from ".";

export default {
  getAllNotifications() {
    return api.get("/notifications");
  },
};
