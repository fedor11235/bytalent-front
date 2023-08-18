<template>
  <div @click="rootStore.FAQPopup = true" class="question">?</div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>

<style lang="scss" scoped>
.question {
  position: fixed;
  bottom: 62px;
  right: 62px;
  border-radius: 50%;
  background: rgba(62, 62, 62, 0.35);
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  z-index: 4;
  cursor: pointer;
  &:hover {
    box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
      4px 6px 12px 0px rgba(232, 232, 232, 0.25),
      2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  }
}
</style>