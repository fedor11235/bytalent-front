<template>
  <div class="popup-level" @click.self="emit('close')">
    <div class="popup-level__carousel">
      <div class="popup-level__arrow popup-level__arrow-pos-left">
        <div class="popup-level__arrow-left"></div>
      </div>
      <div class="popup-level__sliders"></div>
      <div class="popup-level__arrow popup-level__arrow-pos-right">
        <div class="popup-level__arrow-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.popup-level {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(19, 19, 19, 0.84);
  z-index: 1;
  &__carousel {
    position: relative;
    height: 85vh;
    width: 90vw;
  }
  &__sliders {
  }
  &__arrow {
    position: absolute;
    opacity: 0.6;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    &:hover {
      opacity: 1;
    }
    &-pos-left {
      left: 0;
    }
    &-pos-right {
      right: 0;
    }
    &-left {
      position: relative;
      left: 4px;
      width: 50%;
      height: 50%;
      border-top: 4px solid white;
      border-right: 4px solid white;
      transform: rotate(-135deg);
    }
    &-right {
      position: relative;
      right: 4px;
      width: 50%;
      height: 50%;
      border-top: 4px solid white;
      border-right: 4px solid white;
      transform: rotate(45deg);
    }
  }
}
</style>
