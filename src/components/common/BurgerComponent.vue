<template>
  <div class="menu-container">
    <div
      v-if="type === 'burger'"
      class="menu menu-burger"
      :class="['menu', 'menu-burger', `menu-burger-${backgroundColor}`]"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-else :class="['menu-cross', `menu-cross-${backgroundColor}`]">
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef, computed } from "vue";

const props = defineProps<{
  type: "burger" | "cross";
  theme?: "light";
}>();

const theme = toRef(props, "theme");

const backgroundColor = computed(() => {
  if (theme.value === "light") return "black";
  else return "white";
});
</script>

<style lang="scss" scoped>
.menu-container {
  height: 20px;
  .menu {
    cursor: pointer;
    transform-origin: center;
    &:hover {
      animation-name: animate;
      animation-duration: 0.9s;

      @keyframes animate {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0);
        }
        100% {
          transform: scaleY(1);
        }
      }
    }
    &-burger {
      &-black {
        div {
          background: black;
          border: 1px solid black;
        }
      }
      &-white {
        div {
          background: white;
          border: 1px solid white;
        }
      }
      div {
        box-sizing: border-box;
        width: 20px;
        height: 1px;
        margin-bottom: 5px;
        border-radius: 3px;
        z-index: 1;
      }
    }
    &-cross {
      &-black {
        div:before,
        div:after {
          border: 1px solid black;
          background-color: black;
        }
      }
      &-white {
        div:before,
        div:after {
          border: 1px solid white;
          background-color: white;
        }
      }
      div {
        position: relative;
        cursor: pointer;
      }
      div:before,
      div:after {
        content: "";
        position: absolute;
        top: 8px;
        right: 0;
        width: 20px;
        height: 1px;
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
