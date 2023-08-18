import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    visualizationHover: false,
    appHover: false,
    streamingHover: false,
    profileHover: false,
    searchHover: false,

    FAQPopup: false,
    popupUpload: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",

    popupProfile: false,
    popupSettings: false
  }),
});

type StreamingStore = {
  visualizationHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  profileHover: boolean;
  searchHover: boolean;

  FAQPopup: boolean;
  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;

  popupProfile: boolean;
  popupSettings: boolean
};
