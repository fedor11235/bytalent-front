import { defineStore } from "pinia";

export const useStreamingStore = defineStore("streaming", {
  state: (): StreamingStore => ({
    popupConnect: false,
  }),
});

type StreamingStore = {
  popupConnect: boolean;
};
