import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: {},
    backgroundsFill: [],
    backgroundsEmpty: [
      { id: "0-emty", img: "", plus: true },
      { id: "1-emty", img: "" },
      { id: "2-emty", img: "" },
    ],
    project: null,
    files: [],
  }),
  getters: {
    backgrounds: (state) => [
      ...state.backgroundsFill,
      ...state.backgroundsEmpty,
    ],
  },
});

type StreamingStore = {
  background: any;
  backgroundsFill: Background[];
  backgroundsEmpty: BackgroundPlug[];
  files: File[];
  project: any;
};

type Background = {
  id: number;
  img: string;
  plus?: boolean;
};

type BackgroundPlug = {
  id: string;
  img: string;
  plus?: boolean;
};
