<template>
  <div class="content-container">
    <div class="content">
      <div class="content__title">Нет активных уровней</div>
      <div class="content__text">
        Сперва вам необходимо добавить визуализацию
      </div>
      <ButtonComponent
        @click="streamingStore.popupConnect = true"
        url="content/connect.png"
        urlHover="content/connect-hover.png"
        class="content__button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useStreamingStore } from "@/store";

const streamingStore = useStreamingStore();
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  height: calc(100% - 75px);
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    row-gap: 16px;
    flex-direction: column;
    width: 70%;
    text-align: left;
    &__title {
      color: black;
      white-space: pre-line;
      font-family: JuraMedium, sans-serif;
      font-size: 8vh;
      font-style: normal;
      line-height: 120%;
    }
    &__text {
      color: #333;
      font-family: OswaldExtraLight, sans-serif;
      font-size: 26px;
    }
    &__button {
      height: 60px;
    }
  }
}
</style>
