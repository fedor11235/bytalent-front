<template>
  <div
    @mouseenter="handlerMouseenterImg"
    @mouseleave="handlerMouseleaveImg"
    class="card"
    :class="[
      'card',
      {
        card_hover: (isHoverCard || isHover) && !isSearch && !isLogin,
        card_search: isSearch,
        card_login: isLogin && !isSearch,
      },
    ]"
    :style="styleCard"
  >
    <div
      :style="{
        backgroundImage: `url(${require(`@/assets/backgrounds/${backgroundImage}`)})`,
        opacity: opactiImg(isHover, isLogin, isSearch),
      }"
      class="card_img"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRootStore } from "@/store";

const props = defineProps<{
  isSearch: boolean;
  isLogin: boolean;
  isHover: boolean;
  backgroundImage: string;
  name: string;
  text: string;
  loginPosX?: string;
  // searchPosY: string;
  searchPosX: string;
  searchPosY: string;
}>();

const rootStore = useRootStore();

const isHoverCard = ref();

const styleCard = computed(() => {
  if (props.isSearch) {
    return {
      left: props.searchPosX,
      top: props.searchPosY,
    };
  } else if (props.isLogin) {
    return {
      left: props.loginPosX,
    };
  }
  return {};
});

function opactiImg(isHover: boolean, isLogin: boolean, isSearch: boolean) {
  if (isLogin || isSearch) {
    return "0";
  } else {
    return "1";
  }
}

function handlerMouseenterImg() {
  if (props.isLogin || props.isSearch) return;
  rootStore.isHoverCard = true;
  isHoverCard.value = true;
}

function handlerMouseleaveImg() {
  if (props.isLogin || props.isSearch) return;
  rootStore.isHoverCard = false;
  isHoverCard.value = false;
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  top: 0;
  left: 0;
  width: 26vw;
  height: 14.7vh;
  overflow: hidden;
  cursor: pointer;
  font-size: 0;
  transition: all 0.6s;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 1;
  &_img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center;
    background-size: 120%;
    opacity: 1;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.6s;
  }
  &_hover {
    height: 100vh;
  }
  &_login {
    height: 55.555vh;
    width: 10.416vw;
  }
  &_search {
    // position: absolute;
    background-color: rgba(255, 255, 255, 0.15);
    left: 0;
    width: 24.66vw;
  }
  &__title {
    color: white;
    text-align: center;
    font-family: JuraSemiBold;
    line-height: 125%;
    letter-spacing: -1.5px;
  }
  &__text {
    position: absolute;
    right: 0.41vw;
    bottom: 0;
    color: white;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5),
      -2px -1px 8px rgba(0, 0, 0, 0.35);
    font-family: JuraRegular;
    font-size: 5.925vh;
    line-height: 125%;
    letter-spacing: -1.28px;
    transition: transform 0.6s;
    transform: translate(calc(100% + 0.41vw), 100%);
  }
}
</style>
