<template>
  <div class="loader" :style="{ width: size, height: size }">
    <div class="loader__circle" :style="{ width: size, height: size }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size?: string;
}>();
</script>

<style lang="scss" scoped>
// rc\assets\components\loading.svgs
.loader {
  display: inline-block;
  width: 80px;
  height: 80px;

  &__circle {
    background-image: url(@/assets/components/loading.svg);
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  // &__circle {
  //   display: block;
  //   width: 80px;
  //   height: 80px;
  //   border-radius: 50%;
  //   border: 3px solid white;
  //   border-color: white transparent white transparent;
  //   animation: lds-dual-ring 1.2s linear infinite;
  // }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
