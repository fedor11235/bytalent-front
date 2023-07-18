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

<style></style>
