import orderApi from "@/api/orderApi";
import { createFormData } from "@/utils/formData";

export default {
  async makeOrder(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await orderApi.makeOrder(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async getAllOrders() {
    try {
      const { data } = await orderApi.getAllOrders();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
