import axios from "axios";

const instance = axios.create({
  baseURL: "https://bytalent.ru/api",
});

export default instance;
