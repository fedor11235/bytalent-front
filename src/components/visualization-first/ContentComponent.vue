<template>
  <div class="content-container">
    <div class="content">
      <div class="content__title">Нет активных уровней</div>
      <div class="content__text">
        "Вы можете заказать проект либо загрузить свой уровень"
      </div>
      <ButtonComponent
        @click="rootStore.uploadProject = true"
        url="content/order.png"
        urlHover="content/order-hover.png"
        class="content__button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
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
      color: #fff;
      white-space: pre-line;
      font-family: JuraMedium, sans-serif;
      font-size: 8vh;
      font-style: normal;
      line-height: 120%;
    }
    &__text {
      color: #b6b6b6;
      font-family: OswaldExtraLight, sans-serif;
      font-size: 26px;
    }
    &__button {
      height: 60px;
    }
  }
}
</style>
