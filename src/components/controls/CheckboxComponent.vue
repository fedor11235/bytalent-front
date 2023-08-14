<template>
  <div @click="emit('update:modelValue', !modelValue)" class="checkbox">
    <img
      v-if="modelValue"
      :width="width"
      src="@/assets/components/checkbox-active.svg"
      alt="checkbox"
    />
    <img
      v-else
      :height="height"
      src="@/assets/components/checkbox.svg"
      alt="checkbox"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  modelValue: boolean;
  width?: string;
  height?: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>

<style lang="scss" scoped>
.checkbox {
  cursor: pointer;
}
</style>
