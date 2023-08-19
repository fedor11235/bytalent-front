<template>
  <AppComponentAuth v-if="check" />
  <AppComponent v-else />
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import AppComponentAuth from "@/components/test/AppComponentAuth.vue";
import AppComponent from "@/components/test/AppComponent.vue";
import authService from "@/services/authService";

const check = ref(false);

onBeforeMount(async () => {
  check.value = await authService.checkToken();
});
</script>

<style lang="scss" scoped></style>
