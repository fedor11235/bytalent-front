import axios from "axios";

const instance = axios.create({
  baseURL: "https://bytalent.ru/",
});

export default instance;
