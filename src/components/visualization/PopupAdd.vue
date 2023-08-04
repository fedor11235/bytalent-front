<template>
  <div @click.self="emit('close')" class="order">
    <CreateVisualization @create="handleCreate" v-if="isCreate" />
    <AddVisualization v-else @close="emit('close')" @create="isCreate = true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CreateVisualization from "@/components/visualization/ContactVisualization.vue";
import AddVisualization from "@/components/visualization/AddVisualization.vue";
const emit = defineEmits(["close"]);

const isCreate = ref(false);

function handleCreate() {
  emit("close");
}
</script>

<style lang="scss" scoped>
.order {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(22.5px);
}
</style>
