<template>
  <Transition name="drop">
    <PopupWarning
      v-if="rootStore.popupWarning"
      :textWarning="rootStore.textWarning"
    />
  </Transition>
  <Transition name="fade">
    <InfoComponents v-if="rootStore.infoPage" />
  </Transition>
  <Transition name="fade">
    <PopupOrder v-if="rootStore.uploadProject" />
  </Transition>

  <router-view />

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
  <Transition name="fade">
    <SearchHover v-if="rootStore.searchHover" />
  </Transition>

  <Transition name="fade">
    <ProfilePopup v-if="rootStore.popupProfile" />
  </Transition>
  <Transition name="fade">
    <SettingsPopup v-if="rootStore.popupSettings" />
  </Transition>

  <Transition name="fade">
    <PopupFAQ v-if="rootStore.FAQPopup" @close="rootStore.FAQPopup = false" />
  </Transition>
</template>

<script setup lang="ts">
import VisualizationHover from "@/components/popup/VisualizationHover.vue";
import AppHover from "@/components/popup/AppHover.vue";
import StreamingHover from "@/components/popup/StreamingHover.vue";
import ProfileHover from "@/components/popup/ProfileHover.vue";
import SearchHover from "@/components/popup/SearchHover.vue";

import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupWarning from "@/components/common/PopupWarning.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";

import ProfilePopup from "@/components/popup/ProfilePopup.vue";
import SettingsPopup from "@/components/popup/SettingsPopup.vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";

import { useRootStore } from "@/store";

const rootStore = useRootStore();
</script>

<style lang="scss" scoped></style>
