<template>
  <Transition name="fade">
    <PopupUpload v-if="rootStore.popupUpload" />
  </Transition>
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
import PopupUpload from "@/components/common/PopupUpload.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>

<style></style>
