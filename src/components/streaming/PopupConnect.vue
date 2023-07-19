<template>
  <div @click.self="streamingStore.popupConnect = false" class="connect">
    <div class="connect__title">Сперва добавьте визуализацию!</div>
    <div
      @click="streamingStore.popupConnect = false"
      class="connect__btn"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useStreamingStore } from "@/store";

const streamingStore = useStreamingStore();
</script>

<style lang="scss" scoped>
.connect {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10vh;
  &__title {
    text-align: center;
    font-family: JuraMedium, sans-serif;
    font-size: 4vh;
    color: #333;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 2px #fff;
    }
  }
  &__btn {
    height: 45px;
    background-image: url(@/assets/streaming/ok.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
}
</style>
