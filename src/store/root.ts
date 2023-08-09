import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    visualizationHover: true,

    popupUpload: false,
    uploadProject: false,
    infoPage: false,
    popupWarning: false,
    textWarning: "",
  }),
});

type StreamingStore = {
  visualizationHover: boolean;
  
  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;
};
