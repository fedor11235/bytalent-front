<template>
  <Transition name="fade">
    <InfoComponents v-if="rootStore.infoPage" />
  </Transition>
  <Transition name="fade">
    <PopupOrder v-if="rootStore.uploadProject" />
  </Transition>
  <router-view />
</template>

<script setup lang="ts">
import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>

<style></style>
