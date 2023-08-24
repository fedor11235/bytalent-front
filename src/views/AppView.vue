<template>
  <div v-if="finishLoad">
    <AppComponentAuth v-if="check" />
    <AppComponent v-else />
  </div>
  <LoadComponent v-else />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import LoadComponent from "@/components/test/LoadComponent.vue";
import AppComponentAuth from "@/components/test/AppComponentAuth.vue";
import AppComponent from "@/components/test/AppComponent.vue";
import authService from "@/services/authService";

const route = useRoute();

const check = ref(false);
const finishLoad = ref(false);

watch(
  () => route.params,
  async () => {
    check.value = await authService.checkToken();
    finishLoad.value = true;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
