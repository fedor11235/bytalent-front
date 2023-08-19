<template>
  <ProjectComponentAuth v-if="check" />
  <ProjectComponent v-else />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import ProjectComponentAuth from "@/components/test/ProjectComponentAuth.vue";
import ProjectComponent from "@/components/test/ProjectComponent.vue";
import { useRootStore } from "@/store";
import authService from "@/services/authService";

const route = useRoute();

const rootStore = useRootStore();
const check = ref(false);

onBeforeMount(async () => {
  check.value = await authService.checkToken();
});
</script>

<style lang="scss" scoped></style>
