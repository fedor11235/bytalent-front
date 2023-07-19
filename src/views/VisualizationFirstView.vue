<template>
  <div
    class="visualization"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/visualization-first.jpeg`)})`,
    }"
  >
    <Transition name="fade">
      <PopupOrder v-if="visualizationStore.popupOrder" />
    </Transition>
    <div class="visualization__backdrop">
      <HeaderComponent
        urlButton="header/visualization.png"
        urlButtonHover="header/visualization-hover.png"
        type="burger"
        @switch="rootStore.infoPage = !rootStore.infoPage"
      />
      <ContentComponent />
      <FooterComponent
        :curentPages="1"
        :numberPages="2"
        colorTwoPages="#8b8b8b"
        textButton="+ Загрузить готовый проект"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/visualization-first/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";
import { useRootStore } from "@/store";
import { useVisualizationStore } from "@/store";

const rootStore = useRootStore();
const visualizationStore = useVisualizationStore();
</script>

<style lang="scss" scoped>
.visualization {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .blackout {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: black;
    z-index: 1;
  }
  &__backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.58);
  }
}
</style>
