<template>
  <ProjectComponentAuth v-if="rootStore.auth" />
  <ProjectComponent v-else />
</template>

<script setup lang="ts">
import ProjectComponentAuth from "@/components/test/ProjectComponentAuth.vue";
import ProjectComponent from "@/components/test/ProjectComponent.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>

<style lang="scss" scoped></style>
