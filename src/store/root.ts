import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): StreamingStore => ({
    projectHover: false,
    appHover: false,
    streamingHover: false,
    loginHover: false,
    searchHover: false,

    appStartHover: false,
    projectStartHover: false,
    streamingStartHover: false,
    loginStartHover: false,
    searchStartHover: false,

    FAQPopup: false,
    popupUpload: false,
    popupAdd: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",
    titleWarning: "",

    popuplogin: false,
    popupSearch: false,

    popupAddBgr: false,
    popupAddProject: false,
    showPopupBgr: false,

    popupPersonalData: false,
    popupTermsUser: false,

    popupProfile: false,
    loaderFile: false,
    loaderMain: false,
    // popupSettings: false,

    // for test
    idActiveProject: 0,
    auth: false,
    hiddenHeader: false,
    noHover: false,
    isHoverCard: false,
    indexBackgrounds: 0,
    projectId: 0,

    loadPercentage: 0,
    loaderFilePercentage: 0,

    loadApiTest: false,
    loadBgrTest: false,

    // isActiveLoginPopup: true;
    // isActiveSearchPopup: true,
  }),
  getters: {
    isActiveLoginPopup: (state) => state.loginStartHover || state.popuplogin,
    isActiveSearchPopup: (state) => state.searchStartHover || state.popupSearch,
    isShowLoad: (state) => state.loadApiTest && state.loadBgrTest,
  },
});

type StreamingStore = {
  projectHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  loginHover: boolean;
  searchHover: boolean;

  appStartHover: boolean;
  projectStartHover: boolean;
  streamingStartHover: boolean;
  loginStartHover: boolean;
  searchStartHover: boolean;

  popuplogin: boolean;
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
  loaderMain: boolean;
  showPopupBgr: boolean;
  popupSearch: boolean;

  popupPersonalData: boolean;
  popupTermsUser: boolean;
  isHoverCard: boolean;
  // popupSettings: boolean;
  // isActiveLoginPopup?: boolean;
  // isActiveSearchPopup?: boolean;

  auth: boolean;
  hiddenHeader: boolean;
  noHover: boolean;

  idActiveProject: number;
  indexBackgrounds: number;
  projectId: number;
  loadPercentage: number;
  loaderFilePercentage: number;
  loadApiTest: boolean;
  loadBgrTest: boolean;
};
