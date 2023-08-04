<template>
  <div class="start-view">
    <div class="start-view__backdrop">
      <HeaderComponent />
      <div class="start-view__text">
        Unite, Create, Excel: Your new life, Empowered by Talent
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";
</script>

<style lang="scss" scoped>
.start-view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(@/assets/backgrounds/visualization-first.jpeg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &__backdrop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    color: #fff;
    font-family: JuraMedium;
    font-size: 36px;
    font-style: normal;
    line-height: 125%;
    letter-spacing: -1.5px;
  }
}
</style>
