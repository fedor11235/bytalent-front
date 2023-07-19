import { defineStore } from "pinia";

export const useVisualizationStore = defineStore("visualization", {
  state: (): VisualizationStore => ({
    popupOrder: false,
  }),
});

type VisualizationStore = {
  popupOrder: boolean;
};
