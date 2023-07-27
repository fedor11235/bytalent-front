import notificationsApi from "@/api/notificationsApi";

export default {
  async getAllNotifications() {
    try {
      const { data } = await notificationsApi.getAllNotifications();
      console.log(data)
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};

