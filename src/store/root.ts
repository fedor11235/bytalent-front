import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    uploadProject: false,
    infoPage: false,
  }),
});

type StreamingStore = {
  uploadProject: boolean;
  infoPage: boolean;
};
