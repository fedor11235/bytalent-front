<template>
  <div class="load-page">
    <LoaderComponent />
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from "vue";
import { useRootStore } from "@/store";
import LoaderComponent from "@/components/common/LoaderComponent.vue";

const rootStore = useRootStore();

rootStore.hiddenHeader = true;
onUnmounted(() => {
  rootStore.hiddenHeader = false;
});
</script>

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
}
</style>
