import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    popupUpload: false,
    uploadProject: false,
    infoPage: false,
    popupWarning: false,
    textWarning: "",
  }),
});

type StreamingStore = {
  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;
};
