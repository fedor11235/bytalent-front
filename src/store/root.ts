import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    popupUpload: false,
    uploadProject: false,
    infoPage: false,
  }),
});

type StreamingStore = {
  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
};
