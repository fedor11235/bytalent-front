<template>
  <div
    class="layout"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}`)})`,
    }"
  >
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
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import ContentComponent from "@/components/visualization/ContentComponent.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  bg: string;
}>();
</script>

<style lang="scss" scoped>
.layout {
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
