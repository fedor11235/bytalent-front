<template>
  <AppComponentAuth v-if="rootStore.auth" />
  <AppComponent v-else />
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import AppComponentAuth from "@/components/test/AppComponentAuth.vue";
import AppComponent from "@/components/test/AppComponent.vue";

const rootStore = useRootStore();
</script>

<style lang="scss" scoped></style>
