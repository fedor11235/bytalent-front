<template>
  <Transition name="fade">
    <PopupFAQ v-if="isFAQ" @close="isFAQ = false" />
  </Transition>
  <Transition name="fade">
    <PopupUpload v-if="rootStore.popupUpload" />
  </Transition>
  <Transition name="fade">
    <InfoComponents v-if="rootStore.infoPage" />
  </Transition>
  <Transition name="fade">
    <PopupOrder v-if="rootStore.uploadProject" />
  </Transition>
  <router-view />
  <div @click="isFAQ = true" class="question">?</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";
import PopupUpload from "@/components/common/PopupUpload.vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const isFAQ = ref(false);
</script>

<style lang="scss" scoped>
.question {
  position: fixed;
  bottom: 42px;
  right: 42px;
  border-radius: 50%;
  background: rgba(62, 62, 62, 0.35);
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
  /* Jura/38 Header 4 */
  font-family: JuraMedium;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 47.5px */
  letter-spacing: -0.76px;
  cursor: pointer;
}
</style>
