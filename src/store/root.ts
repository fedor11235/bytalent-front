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


    appStart: false,
    projectStart: false,
    streamingStart: false,
    loginStart: false,
    searchStart: false,

    FAQPopup: false,
    popupUpload: false,
    popupAdd: false,
    uploadProject: false,
    infoPage: false,

    popupWarning: false,
    textWarning: "",
    titleWarning: "",

    popupSearch: false,

    popupAddBgr: false,
    popupAddProject: false,
    showPopupBgr: false,

    popupPersonalData: false,
    popupTermsUser: false,
    popupDelete: false,

    popupProfile: false,
    loaderFile: false,
    loaderMain: false,
    // popupSettings: false,

    popupStartLogin: false,

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
    activePanel: "profile",

    popupLogin: false,

    contentBackdrop: false,
    contentTop: false,
    contentMiddle: false,
    contentBottom: false,

    searchPage: false,

    pageNext: "",

    // isActiveLoginPopup: true;
    // isActiveSearchPopup: true,
  }),
  getters: {
    // isActiveLoginPopup: (state) => state.loginStartHover || state.popuplogin,
    // isActiveSearchPopup: (state) => state.searchStartHover || state.popupSearch,
    isShowLoad: (state) => state.loadApiTest && state.loadBgrTest,
    isShowSearch: (state) => state.searchHover || state.searchPage,
  },
});

type StreamingStore = {
  projectHover: boolean;
  appHover: boolean;
  streamingHover: boolean;
  loginHover: boolean;
  searchHover: boolean;

  popupStartLogin: boolean;

  appStartHover: boolean;
  projectStartHover: boolean;
  streamingStartHover: boolean;
  loginStartHover: boolean;
  searchStartHover: boolean;

  appStart: boolean
  projectStart: boolean
  streamingStart: boolean
  loginStart: boolean
  searchStart: boolean

  popupLogin: boolean;
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
  popupDelete: boolean;

  popupPersonalData: boolean;
  popupTermsUser: boolean;
  isHoverCard: boolean;
  // popupSettings: boolean;
  // isActiveLoginPopup?: boolean;
  // isActiveSearchPopup?: boolean;
  activePanel: string;

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

  contentBackdrop: boolean;
  contentTop: boolean;
  contentMiddle: boolean;
  contentBottom: boolean;

  pageNext: string;
  searchPage: boolean;
};
