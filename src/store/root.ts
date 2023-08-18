import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    visualizationHover: false,
    appHover: false,
    streamingHover: false,
    profileHover: false,
    searchHover: false,

    popupUpload: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",

    popupProfile: false
  }),
});

type StreamingStore = {
  visualizationHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  profileHover: boolean;
  searchHover: boolean;

  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;

  popupProfile: boolean;
};
