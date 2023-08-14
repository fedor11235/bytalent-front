import { defineStore } from "pinia";

export const useDocStore = defineStore("doc", {
  state: (): DocStore => ({
    termsUser: false,
    personalData: false,
  }),
  getters: {
    activeForm: (state) => state.termsUser && state.personalData,
  },
});

type DocStore = {
  termsUser: boolean;
  personalData: boolean;
};
