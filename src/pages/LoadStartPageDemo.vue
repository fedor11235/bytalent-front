<template>
  <div class="load-page">
    <div class="load-page__img" alt="logo"></div>
    <div class="load-page__window"></div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from "vue";
import { useRootStore } from "@/store";
import ProgressSpinner from "primevue/progressspinner";

const props = defineProps<{
  hiddenHeader?: boolean;
}>();

const rootStore = useRootStore();

rootStore.hiddenHeader = true;
</script>

<style lang="scss" scoped>
.load-page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  &__img {
    height: 100%;
    width: 41.66vw;
    background-image: url(@/assets/img/logo-load.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__window {
    position: absolute;
    background-color: transparent;
    border-left: 100vw solid black;
    border-right: 100vw solid black;
    top: 50%;
    left: -85vw;
    transform: translateY(-50%);
    height: 55.833vh;
    width: 12.8125vw;
    border-radius: 55.833vh;
    box-sizing: content-box;

    animation-duration: 7s;
    animation-name: moved;
    // animation-iteration-count: infinite;

    box-shadow: inset 0 10px 10px 20px black;

    @keyframes moved {
      from {
        left: -85vw;
      }
      to {
        left: -25vw;
      }
    }
  }
}
</style>
