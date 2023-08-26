<template>
  <div class="load-page">
    <div class="load-page__loader"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.load-page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #191919;

  &__loader {
    display: inline-block;
    width: 19px;
    height: 19px;
  }
  &__loader:after {
    content: " ";
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid white;
    border-color: white transparent white transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
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
