import api from ".";

export default {
  makeOrder(payload: FormData) {
    return api.post("/order", payload);
  },
  getAllOrders() {
    return api.get("/order");
  },
};
