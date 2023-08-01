import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: (): StreamingStore => ({
    background: "",
  }),
});

type StreamingStore = {
  background: string;
};
