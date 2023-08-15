import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: "",
    backgroundsFill: [],
    backgroundsEmpty: [
      { id: "0-emty", img: "", plus: true },
      { id: "1-emty", img: "" },
      { id: "2-emty", img: "" },
    ],
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
  background: string;
  backgroundsFill: Background[];
  backgroundsEmpty: BackgroundPlug[];
  files: File[];
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
