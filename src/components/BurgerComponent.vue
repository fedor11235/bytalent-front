<template>
  <div class="menu-container">
    <div class="menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu-container {
  height: 20px;
  .menu {
    cursor: pointer;
    &:hover {
      animation-name: animate;
      animation-duration: .9s;

      @keyframes animate {
        0%   {transform: scaleY(1);}
        50%  {transform: scaleY(0);}
        100% {transform: scaleY(1);}
      }
    }
    div {
      box-sizing: border-box;
      width: 20px;
      height: 1px;
      margin-bottom: 5px;
      background: white;
      border-radius: 3px;
      z-index: 1;
      border: 1px solid white;
    }
  }
}
</style>
