import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    visualizationHover: false,
    appHover: false,
    streamingHover: false,
    profileHover: false,

    popupUpload: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",
  }),
});

type StreamingStore = {
  visualizationHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  profileHover: boolean;

  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;
};
