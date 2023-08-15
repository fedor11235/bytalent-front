import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: "",
    backgrounds: [
      { id: "0-emty", img: "" },
      { id: "1-emty", img: "" },
      { id: "2-emty", img: "" },
    ],
    files: [],
  }),
});

type StreamingStore = {
  background: string;
  backgrounds: Background[] | BackgroundPlug[];
  files: File[];
};

type Background = {
  id: number;
  img: string;
};

type BackgroundPlug = {
  id: string;
  img: string;
};
