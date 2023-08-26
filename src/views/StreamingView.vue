<template>
  <div v-if="finishLoad">
    <StreamingComponentAuth v-if="check" />
    <StreamingComponent v-else />
  </div>
  <LoadComponent v-else />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import authService from "@/services/authService";
import LoadComponent from "@/pages/LoadComponent.vue";
import StreamingComponent from "@/pages/StreamingComponent.vue";
import StreamingComponentAuth from "@/pages/StreamingComponentAuth.vue";

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
