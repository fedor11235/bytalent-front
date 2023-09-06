<template>
  <div class="loader-file">
    <div class="loader-file__dot"></div>
    <div
      class="loader-file__sceletron"
      :style="{ width: `${loadPercentage}%` }"
    ></div>
    <div class="loader-file__dot"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loadPercentage?: number;
}>();
</script>

<style lang="scss" scoped>
.loader-file {
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  column-gap: 10px;
  &__dot {
    width: 2px;
    height: 2px;
    background-color: white;
  }
  &__sceletron {
    height: 6px;
    background-color: white;
    transition: width 0.3s;
  }
}
</style>
