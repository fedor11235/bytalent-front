<template>
  <div class="button"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :style="{
      backgroundImage: `url(${ require(`@/assets/${hover? urlHover: url}`)})`
    }"
  ></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  url: string
  urlHover: string
}>()

const hover = ref(false);
</script>

<style scoped>
.button {
  width: 198px;
  height: 44px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
.button:hover {
  cursor: pointer;
}
</style>
