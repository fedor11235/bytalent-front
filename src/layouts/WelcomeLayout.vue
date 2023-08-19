<template>
  <div
    class="layout-welcome"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}.png`)})`,
    }"
  >
    <div
      class="layout-welcome__backdrop"
      :style="{
        backgroundColor: bgrDropColor,
        backdropFilter: bgrDropBlur,
      }"
    >
      <HeaderComponent :theme="theme" />
      <div class="layout-welcome__content">
        <div class="layout-welcome__content_top">
          <slot name="content-top"></slot>
        </div>
        <div class="layout-welcome__title">{{ title }}</div>
        <div class="layout-welcome__description">
          <LineComponent v-if="isLine" />
          {{ description }}
        </div>
        <img
          @click="btnClick"
          class="layout-welcome__btn"
          :src="require(`@/assets/components/${imgBtn}.svg`)"
          alt="download"
        />
        <div class="layout-welcome__content_bottom">
          <slot name="content-bottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import LineComponent from "@/components/common/LineComponent.vue";

defineProps<{
  bg: string;
  imgBtn: string;
  isLine?: boolean;
  bgrDropColor?: string;
  bgrDropBlur?: string;
  btnClick: () => void;
  title: string;
  description: string;
  theme?: "light";
}>();
</script>

<style lang="scss" scoped>
.layout-welcome {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12.5px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 74vw;
    margin: auto;
    &_top {
      height: 21vh;
      margin: 5.3vh 0;
    }
    &_bottom {
      position: absolute;
      width: 74vw;
      bottom: 7.2vh;
    }
  }
  &__title {
    color: #f9f9f9;
    font-family: JuraSemiBold;
    font-size: 6.1vh;
    line-height: 125%;
    letter-spacing: -1.32px;
    overflow-x: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
  &__description {
    color: #f9f9f9;
    font-family: JuraMedium;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.4px;
    display: flex;
    align-items: center;
    margin-bottom: 5.5vh;
    overflow-x: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
  &__btn {
    width: 15.625vw;
    height: 5.89vh;
    cursor: pointer;
  }
}
</style>
