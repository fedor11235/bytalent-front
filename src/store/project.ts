import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: {},
    backgroundsFill: [],
    backgroundsEmpty: [
      { id: "0-emty", type: "empty", content: "", plus: true },
      { id: "1-emty", type: "empty", content: "" },
      { id: "2-emty", type: "empty", content: "" },
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
  type: string;
  content: string;
  plus?: boolean;
  load?: boolean;
};

type BackgroundPlug = {
  id: string;
  type: string;
  content: string;
  plus?: boolean;
  load?: boolean;
};
