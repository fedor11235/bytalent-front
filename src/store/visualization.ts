import { defineStore } from "pinia";

export const useVisualizationStore = defineStore("visualization", {
  state: (): VisualizationStore => ({
    popupOrder: false,
    secondPage: false,
  }),
});

type VisualizationStore = {
  popupOrder: boolean;
  secondPage: boolean;
};
