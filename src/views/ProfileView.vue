<template>
  <div class="search-view">
    <div class="search-view__backdrop">
      <HeaderComponent class="search-view__header" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
</script>

<style lang="scss" scoped>
.search-view {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/backgrounds/profile.jpg);
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(17.5px);
  }
  &__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__input {
    width: 80vw;
  }
  &__btn {
    cursor: pointer;
  }
}
</style>
