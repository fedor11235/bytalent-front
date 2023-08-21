<template>
  <div @click.self="emit('close')" class="add">
    <ThankVisualization @close="handleClose" v-if="thank" />
    <!-- <ContactVisualization v-else @order="thank = true" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ThankVisualization from "@/components/visualization/ThankVisualization.vue";
// import ContactVisualization from "@/components/visualization/ContactVisualization.vue";
import projectService from "@/services/projectService";
const emit = defineEmits(["close"]);

const thank = ref(false);

function handleClose() {
  location.reload();
  emit("close");
}
</script>

<style lang="scss" scoped>
.add {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(22.5px);
}
</style>
