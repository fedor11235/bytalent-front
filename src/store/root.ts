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
    popupAdd: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",
    titleWarning: "",

    popupAddBgr: false,
    popupAddProject: false,
    showPopupBgr: false,

    popupProfile: false,
    loaderFile: false,
    // popupSettings: false,

    // for test
    auth: false,
    hiddenHeader: false,
    noHover: false,
    indexBackgrounds: 0,
    projectId: 0,

    loadPercentage: 0,
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
  titleWarning: string;
  popupAddBgr: boolean;
  popupAdd: boolean;
  popupAddProject: boolean;
  popupProfile: boolean;
  loaderFile: boolean;
  showPopupBgr: boolean;
  // popupSettings: boolean;

  auth: boolean;
  hiddenHeader: boolean;
  noHover: boolean;

  indexBackgrounds: number;
  projectId: number;
  loadPercentage: number;
};
