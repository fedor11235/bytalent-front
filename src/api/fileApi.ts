import api from ".";

export default {
  getFile(name: string) {
    return api.get(`file/background/${name}`);
  },
};
