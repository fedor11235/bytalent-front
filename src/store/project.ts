import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: "",
    backgrounds: [],
  }),
});

type StreamingStore = {
  background: string;
  backgrounds: Background[];
};

type Background = {
  id: number;
  img: string;
};
