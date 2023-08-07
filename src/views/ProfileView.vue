<template>
  <div class="serach-view">
    <div class="serach-view__backdrop">
      <HeaderComponent class="serach-view__header" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import InputComponent from "@/components/controls/InputComponent.vue";
const searchText = ref("");
</script>

<style lang="scss" scoped>
.serach-view {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/backgrounds/lvel.jpeg);
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
