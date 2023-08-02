import { defineStore } from "pinia";

export const useDocStore = defineStore("doc", {
  state: (): DocStore => ({
    termsUser: false,
    personalData: false,
  }),
});

type DocStore = {
  termsUser: boolean;
  personalData: boolean;
};
