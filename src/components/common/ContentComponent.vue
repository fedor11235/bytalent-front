<template>
  <div class="content-container">
    <div class="content">
      <div
        :class="['content__title', { content__title_light: theme === 'light' }]"
      >
        {{ title }}
      </div>
      <div
        :class="['content__text', { content__text_light: theme === 'light' }]"
      >
        {{ text }}
      </div>
      <ButtonComponent
        @click="rootStore.uploadProject = true"
        :url="`content/${urlBtn}.png`"
        :urlHover="`content/${urlBtnHover}.png`"
        class="content__button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  theme?: "light";
  title: string;
  text: string;
  urlBtn: string;
  urlBtnHover: string;
}>();
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
      &_light {
        color: #000;
      }
    }
    &__text {
      color: #b6b6b6;
      font-family: OswaldExtraLight, sans-serif;
      font-size: 26px;
      &_light {
        color: #000;
      }
    }
    &__button {
      height: 60px;
    }
  }
}
</style>
