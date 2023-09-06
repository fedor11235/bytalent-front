<template>
  <div class="popup-warning_cntnr">
    <div class="popup-warning">
      <div @click="handlerClose" class="popup-warning__close"></div>
      <div v-if="titleWarning" class="popup-warning__text">
        {{ titleWarning }}
      </div>
      <div v-if="textWarning" class="popup-warning__text">
        {{ textWarning }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  titleWarning: string;
  textWarning: string;
}>();

setTimeout(() => {
  rootStore.popupWarning = false;
}, 3000);

function handlerClose() {
  rootStore.popupWarning = false;
}
</script>

<style lang="scss" scoped>
.popup-warning {
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  background-color: rgba(0, 0, 0, 0.35);
  box-shadow: 0px 40px 40px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  padding: 5.37vh 5.468vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  row-gap: 2.59vh;
  &_cntnr {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 3;
  }
  &__close {
    height: 2.29vw;
    width: 2.29vw;
    right: 0.8vw;
    top: 1.48vh;
    cursor: pointer;
    background-image: url(@/assets/icons/close2.svg);
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(62, 62, 62, 0.35);
  }
  &__text {
    color: white;
    font-family: JuraMedium;
    font-size: 2.59vh;
    line-height: 100%;
    letter-spacing: -0.56px;
  }
}
</style>
