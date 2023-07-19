<template>
  <div @click.self="rootStore.uploadProject = false" class="order">
    <div
      @click="visualizationStore.popupOrder = true"
      class="order__visualization"
    >
      Заказать визуализацию объекта недвижимости
    </div>
    <div @click="visualizationStore.popupOrder = true" class="order__project">
      Загрузить готовый дизайн-проект
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import { useVisualizationStore } from "@/store";

const visualizationStore = useVisualizationStore();
const rootStore = useRootStore();
</script>

<style lang="scss" scoped>
.order {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.78);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10vh;
  &__visualization {
    color: #fff;
    text-align: center;
    font-family: Jura, sans-serif;
    font-size: 3vh;
    line-height: 4vh;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 2px #fff;
    }
  }
  &__project {
    color: #fff;
    text-align: center;
    font-family: Jura, sans-serif;
    font-size: 3vh;
    line-height: 4vh;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 2px #fff;
    }
  }
}
</style>
