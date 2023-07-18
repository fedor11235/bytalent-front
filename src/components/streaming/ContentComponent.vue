<template>
  <div class="content-container">
    <div class="content">
      <div class="content__title">Нет активных уровней</div>
      <div class="content__text">
        Сперва вам необходимо добавить визуализацию
      </div>
      <TestButton
        @click="homeStore.uploadProject = true"
        class="content__button"
        >Подключить</TestButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import TestButton from "@/components/TestButton.vue";
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
      font-family: Jura, sans-serif;
      font-size: 8vh;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
    &__text {
      color: #333;
      font-family: Oswald, sans-serif;
      font-size: 26px;
      font-weight: 200;
    }
    &__button {
      width: 240px;
      &:hover {
        box-shadow: 0 0 1px 1px white;
      }
    }
  }
}
</style>
