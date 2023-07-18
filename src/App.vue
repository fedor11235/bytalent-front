<template>
  <Transition name="fade">
    <InfoComponents v-if="homeStore.infoPage" />
  </Transition>
  <Transition name="fade">
    <PopupOrder v-if="homeStore.uploadProject" />
  </Transition>
  <router-view />
</template>

<script setup lang="ts">
import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";
import { useHomeStore } from "@/store";

const homeStore = useHomeStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
