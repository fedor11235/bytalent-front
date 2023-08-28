<template>
  <ErrorComponent />
</template>

<script setup lang="ts">
import ErrorComponent from "@/pages/ErrorComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

rootStore.hiddenHeader = true;
</script>

<style lang="scss" scoped></style>
