import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: "",
    backgrounds: [],
    files: [],
  }),
});

type StreamingStore = {
  background: string;
  backgrounds: Background[];
  files: File[];
};

type Background = {
  id: number;
  img: string;
};
