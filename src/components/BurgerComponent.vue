<template>
  <div class="menu-container">
    <div v-if="type === 'burger'" class="menu menu-burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else class="menu-cross">
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'burger' | 'cross'
}>()
</script>

<style lang="scss" scoped>
.menu-container {
  height: 20px;
  .menu {
    cursor: pointer;
    transform-origin: center;
    &:hover {
      animation-name: animate;
      animation-duration: .9s;

      @keyframes animate {
        0%   {transform: scaleY(1);}
        50%  {transform: scaleY(0);}
        100% {transform: scaleY(1);}
      }
    }
    &-burger {
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
    &-cross {
      div {
        position: relative;
        cursor: pointer;
      }
      div:before, div:after {
        content: "";
        position: absolute;
        top: 8px;
        right: 0;
        width: 20px;
        height: 1px;
        border: 1px solid white;
        background-color: white;
      }
      div:before {
        transform: rotate(45deg);
      }
      div:after {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
