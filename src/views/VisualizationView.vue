<template>
  <div
    class="visualization"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${
        visualizationStore.secondPage ? 'visualization-second' : 'visualization-first'
      }.jpeg`)})`,
    }"
  >
    <Transition name="trans">
      <div class="blackout" v-if="blackout" />
    </Transition>
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
      <FooterComponent :numberPages="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/visualization/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import PopupOrder from "@/components/visualization/PopupOrder.vue";
import { useRootStore } from "@/store";
import { useVisualizationStore } from "@/store";

const rootStore = useRootStore();
const visualizationStore = useVisualizationStore();
const blackout = ref(false);

watch(
  () => visualizationStore.secondPage,
  () => {
    blackout.value = true;
    setTimeout(() => (blackout.value = false), 300);
  }
);
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
