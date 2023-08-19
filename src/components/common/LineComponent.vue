<template>
  <div class="line">
    <div :class="['line_left', { 'line_left-wrt': themeLight }]"></div>
    <div :class="['line_right', { 'line_right-wrt': themeLight }]"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  themeLight?: boolean;
}>();
</script>

<style lang="scss" scoped>
.line {
  display: flex;
  column-gap: 0.625vw;
  margin-right: 0.625vw;
  &_left {
    width: 3.125vw;
    height: 4px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.25);
    &-wrt {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  &_right {
    width: 1.04vw;
    height: 4px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.85);
    &-wrt {
      background-color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
