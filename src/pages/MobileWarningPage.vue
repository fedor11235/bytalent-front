<template>
  <div class="mobile-page">
    <div class="mobile-page__title">Только с компьюютера</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.mobile-page {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #191919;
  align-items: center;
  justify-content: center;
  display: flex;
  &__title {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-family: JuraMedium;
    font-size: 2.592vh;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.56px;
  }
}
</style>
