<template>
  <HoverLayout
    bg="visualization-first.jpeg"
    content="Unite, Create, Excel: Your new life, Empowered by Talent"
    :noHover="check"
  />
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import HoverLayout from "@/layouts/HoverLayout.vue";
import authService from "@/services/authService";

const check = ref(false);

onBeforeMount(async () => {
  check.value = await authService.checkToken();
});
</script>

<style lang="scss" scoped></style>
