<template>
  <Transition name="fade">
    <VisualizationHover v-if="rootStore.visualizationHover" />
  </Transition>
  <Transition name="fade">
    <AppHover v-if="rootStore.appHover" />
  </Transition>
  <Transition name="fade">
    <StreamingHover v-if="rootStore.streamingHover" />
  </Transition>
  <Transition name="fade">
    <ProfileHover v-if="rootStore.profileHover" />
  </Transition>
  <Transition name="drop">
    <PopupWarning
      v-if="rootStore.popupWarning"
      :textWarning="rootStore.textWarning"
    />
  </Transition>
  <Transition name="fade">
    <PopupFAQ v-if="isFAQ" @close="isFAQ = false" />
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
import VisualizationHover from "@/components/popup/VisualizationHover.vue";
import AppHover from "@/components/popup/AppHover.vue";
import StreamingHover from "@/components/popup/StreamingHover.vue";
import ProfileHover from "@/components/popup/ProfileHover.vue";

import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupWarning from "@/components/common/PopupWarning.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();

const isFAQ = ref(false);
</script>

<style lang="scss" scoped>
.question {
  position: fixed;
  bottom: 62px;
  right: 62px;
  border-radius: 50%;
  background: rgba(62, 62, 62, 0.35);
  height: 44px;
  width: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    box-shadow: -3px -1px 8px 0px rgba(232, 232, 232, 0.25),
      4px 6px 12px 0px rgba(232, 232, 232, 0.25),
      2px 2px 2px 0px rgba(232, 232, 232, 0.5) inset;
  }
}
</style>
