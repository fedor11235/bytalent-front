<template>
  <div class="popup-warning">
    {{ textWarning }}
  </div>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";

const rootStore = useRootStore();

defineProps<{
  textWarning: string;
}>();

setTimeout(() => {
  rootStore.popupWarning = false;
}, 3000);
</script>

<style lang="scss" scoped>
.popup-warning {
  position: fixed;
  top: 15px;
  width: 400px;
  left: calc(50% - 200px);
  background-color: white;
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  padding: 30px 60px;
  border-radius: 12px;
  border-right: 12px solid red;
  z-index: 100;
}
</style>
