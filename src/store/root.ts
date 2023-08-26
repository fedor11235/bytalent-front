import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    projectHover: false,
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
    popupSettings: false,

    // for test
    auth: false,
  }),
});

type StreamingStore = {
  projectHover: boolean;
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
  popupSettings: boolean;

  auth: boolean;
};
