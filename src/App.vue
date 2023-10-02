<template>
  <!-- <LoadPage v-if="!rootStore.isShowLoad" /> -->
  <MobileWarningPage v-if="isMobile" />
  <div v-else>
    <Transition name="fade">
      <LoginPopup v-if="rootStore.popupLogin" />
    </Transition>
    <Transition name="drop">
      <PopupWarning
        v-if="rootStore.popupWarning"
        :titleWarning="rootStore.titleWarning"
        :textWarning="rootStore.textWarning"
      />
    </Transition>
    <Transition name="drop">
      <DeleteProjectPopup v-if="rootStore.popupDelete" />
    </Transition>
    <Transition name="fade">
      <InfoComponents v-if="rootStore.infoPage" />
    </Transition>
    <Transition name="fade">
      <PopupOrder v-if="rootStore.uploadProject" />
    </Transition>
    <Transition name="fade">
      <AddFileBgr v-if="rootStore.popupAddBgr" />
    </Transition>
    <Transition name="fade">
      <AddFileProject
        v-if="rootStore.popupAddProject"
        :projectId="rootStore.idActiveProject"
      />
    </Transition>
    <Transition name="fade">
      <PopupLavel
        v-if="rootStore.showPopupBgr"
        :indexBackgrounds="rootStore.indexBackgrounds"
        :projectId="rootStore.projectId"
      />
    </Transition>
    <Transition name="fade">
      <PopupAdd v-if="rootStore.popupAdd" @close="rootStore.popupAdd = false" />
    </Transition>
    <Transition name="fade">
      <PopupPersonalData
        v-if="rootStore.popupPersonalData"
        @close="rootStore.popupPersonalData = false"
      />
    </Transition>
    <Transition name="fade">
      <PopupTermsUser
        v-if="rootStore.popupTermsUser"
        @close="rootStore.popupTermsUser = false"
      />
    </Transition>

    <HeaderComponent
      v-if="!rootStore.hiddenHeader"
      :noHover="rootStore.noHover"
    />

    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="(route.meta.transition as string | undefined) || 'fade'"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- попап входа при ховере -->
    <Transition name="move-top">
      <div v-if="rootStore.loginHover" class="background"></div>
    </Transition>

    <Transition name="move-bottom">
      <LoginForm v-if="rootStore.loginHover" absolutePos name="fade" />
    </Transition>

    <!-- попап поиска при ховере -->
    <Transition name="move-right">
      <SearchPopup v-if="rootStore.searchHover" />
    </Transition>

    <!-- старые попапы при наведении на разделы -->
    <!-- <Transition name="fade">
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
    </Transition> -->

    <Transition name="fade">
      <ProfilePopup v-if="rootStore.popupProfile" />
    </Transition>

    <Transition name="fade">
      <PopupFAQ v-if="rootStore.FAQPopup" @close="rootStore.FAQPopup = false" />
    </Transition>

    <LoaderFileComponent
      v-show="rootStore.loaderMain"
      :loadPercentage="rootStore.loadPercentage"
      class="loader-file"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
// import LoadPage from "@/pages/LoadPage.vue";

// import VisualizationHover from "@/components/popup/VisualizationHover.vue";
// import AppHover from "@/components/popup/AppHover.vue";
// import StreamingHover from "@/components/popup/StreamingHover.vue";
// import ProfileHover from "@/components/popup/ProfileHover.vue";
// import SearchHover from "@/components/popup/SearchHover.vue";

// import SearchComponent from "@/components/common/SearchComponent.vue";
import SearchPopup from "@/components/popup/SearchPopup.vue";

import LoginPopup from "@/components/popup/LoginPopup.vue";

import AddFileBgr from "@/components/newLavel/AddFileBgr.vue";
import AddFileProject from "@/components/newLavel/AddFileProject.vue";

import InfoComponents from "@/components/common/InfoComponents.vue";
import PopupWarning from "@/components/common/PopupWarning.vue";
import DeleteProjectPopup from "@/components/popup/DeleteProjectPopup.vue";
import PopupOrder from "@/components/common/PopupOrder.vue";
import PopupLavel from "@/components/newLavel/PopupLavel.vue";

import ProfilePopup from "@/components/popup/ProfilePopup.vue";
import PopupFAQ from "@/components/docs/PopupFAQ.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

import MobileWarningPage from "@/pages/MobileWarningPage.vue";
import PopupAdd from "@/components/visualization/PopupAdd.vue";
import LoaderFileComponent from "@/components/common/LoaderFileComponent.vue";

import PopupTermsUser from "@/components/docs/PopupTermsUser.vue";
import PopupPersonalData from "@/components/docs/PopupPersonalData.vue";

import LoginForm from "@/components/auth/LoginForm.vue";

import { useRoute } from "vue-router";
import { useRootStore } from "@/store";

// eslint-disable-next-line
// import { gsap, Power2 } from "gsap";

const route = useRoute();
const rootStore = useRootStore();

const minWidth = 840;
// const minWidth = 0;
const screenWidth = ref(window.innerWidth);
const finish = ref(false);
const isMobile = computed(() => screenWidth.value < minWidth && finish.value);

window.addEventListener("resize", setScrennWidth);

function setScrennWidth() {
  screenWidth.value = window.innerWidth;
}
// function handlerBeforeEnter(el: any) {
//   gsap.to(el, 0, {
//     yPercent: -100, scale: 0.9, ease: Power2.easeInOut
//   })
// }

// function handlerEnter(el: any, done: any) {
//   done()
//   gsap.to(el, 1, {
//       gsap: -50, scale: 0.9, ease: Power2.easeInOut,
//       onComplete: function() {
//         gsap.to(el, 1, {
//           yPercent: 0, scale: 1, ease: Power2.easeInOut
//         })
//       }
//   })
// }

// function handlerLeave(el: any, done: any) {
//   gsap.to(el, 1, {
//     yPercent: -50, scale: 0.9, ease: Power2.easeInOut,
//     onComplete: function() {
//       gsap.to(el, 1, {
//         yPercent: -100, scale: 1, ease: Power2.easeInOut,
//         onComplete: function() { done() }
//       })
//     }
//   })
// }

watch(
  () => route.params,
  () => {
    finish.value = route.name !== "reviewer";
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.loader-file {
  position: fixed;
  width: 74vw;
  bottom: 1.48vh;
  left: 13vw;
}

.background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #191919;
  z-index: 3;
  scale: 0.5;
  transform: skew(10deg, 0);
}
</style>
