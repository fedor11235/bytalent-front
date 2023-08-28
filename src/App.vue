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

  <HeaderComponent
    v-if="!rootStore.hiddenHeader"
    :noHover="rootStore.noHover"
  />
  <router-view />

  <Transition name="fade">
    <VisualizationHover v-if="rootStore.projectHover" />
  </Transition>
  <Transition name="fade">
    <AppHover v-if="rootStore.appHover" />
  </Transition>
  <Transition name="fade">
    <StreamingHover v-if="rootStore.streamingHover" />
  </Transition>
  <Transition name="fade">
    <ProfileHover v-if="rootStore.loginHover" />
  </Transition>
  <Transition name="fade">
    <SearchHover v-if="rootStore.searchHover" />
  </Transition>

  <Transition name="fade">
    <ProfilePopup v-if="rootStore.popupProfile" />
  </Transition>

  <Transition name="fade">
    <PopupFAQ v-if="rootStore.FAQPopup" @close="rootStore.FAQPopup = false" />
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import VisualizationHover from "@/components/popup/VisualizationHover.vue";
import AppHover from "@/components/popup/AppHover.vue";
import StreamingHover from "@/components/popup/StreamingHover.vue";
import ProfileHover from "@/components/popup/ProfileHover.vue";
import SearchHover from "@/components/popup/SearchHover.vue";

import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupWarning from "@/components/common/PopupWarning.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";

import ProfilePopup from "@/components/popup/ProfilePopup.vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

import { useRootStore } from "@/store";

const route = useRoute();
const rootStore = useRootStore();

const HeaderHidden = ref();

console.log(route.name);
</script>

<style lang="scss" scoped></style>
