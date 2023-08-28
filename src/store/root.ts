import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    projectHover: false,
    appHover: false,
    streamingHover: false,
    loginHover: false,
    searchHover: false,

    FAQPopup: false,
    popupUpload: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",

    popupProfile: false,
    // popupSettings: false,

    // for test
    auth: false,
    hiddenHeader: false,
    noHover: false,
  }),
  // getters: {
  //   haddenHeader: (state) => state.projectHover || state.appHover || state.streamingHover || state.profileHover || state.searchHover || state.popupProfile
  // },
});

type StreamingStore = {
  projectHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  loginHover: boolean;
  searchHover: boolean;

  FAQPopup: boolean;
  popupUpload: boolean;
  uploadProject: boolean;
  infoPage: boolean;
  popupWarning: boolean;
  textWarning: string;

  popupProfile: boolean;
  // popupSettings: boolean;

  auth: boolean;
  hiddenHeader: boolean;
  noHover: boolean;
};
