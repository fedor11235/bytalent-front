import fileApi from "@/api/fileApi";

export default {
  async getFile(name: string) {
    try {
      const { data } = await fileApi.getFile(name);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
