<template>
  <div
    class="hover-layout"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}`)})`,
    }"
  >
    <div class="hover-layout__backdrop">
      <HeaderComponent :theme="theme" />
      <div v-if="load" class="hover-layout__load">
        <div class="hover-layout__load_img"></div>
      </div>
      <div class="hover-layout__content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  bg: string;
  content: string;
  load?: boolean;
  theme?: "light";
}>();
</script>

<style lang="scss" scoped>
.hover-layout {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__load {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-25%);
    width: 20vw;
    height: 20vw;
    &_img {
      height: 100%;
      width: 100%;
      background-image: url(@/assets/loading/hover.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      animation-timing-function: linear;
      animation-duration: 3s;
      animation-name: turn;
      animation-iteration-count: infinite;
      @keyframes turn {
        from {
          rotate: 0deg;
        }
        to {
          rotate: 360deg;
        }
      }
    }
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    color: #fff;
    font-family: JuraMedium;
    font-size: 50px;
    font-style: normal;
    // font-weight: 600;
    line-height: 125%;
    letter-spacing: -1.5px;
    transform: translateY(-25%);
    transform-origin: center;
  }
}
</style>
