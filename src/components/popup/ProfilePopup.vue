<template>
  <div class="profile-popup" @click.self="rootStore.popupProfile = false">
    <EmptyComponent />
    <!-- <div class="switch-profile-settings">
      <img
        v-if="activePanel === 'settings'"
        class="switch-profile-settings_img"
        src="@/assets/icons/settings-active.svg"
        alt="settings"
      />
      <img
        v-else
        @click="activePanel = 'settings'"
        class="switch-profile-settings_img"
        src="@/assets/icons/settings.svg"
        alt="settings"
      />
      <img
        v-if="activePanel === 'profile'"
        class="switch-profile-settings_img"
        src="@/assets/icons/profile-active.svg"
        alt="profile"
      />
      <img
        v-else
        @click="activePanel = 'profile'"
        class="switch-profile-settings_img"
        src="@/assets/icons/profile.svg"
        alt="profile"
      />
    </div> -->
    <Transition name="move-right">
      <ProfilePanel v-if="rootStore.activePanel === 'profile'" />
    </Transition>
    <Transition name="move-left">
      <SettingsPanel v-if="rootStore.activePanel === 'settings'" />
    </Transition>
    <FAQControl />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import EmptyComponent from "@/components/common/EmptyComponent.vue";
import FAQControl from "@/components/controls/FAQControl.vue";
import ProfilePanel from "@/components/test/ProfilePanel.vue";
import SettingsPanel from "@/components/test/SettingsPanel.vue";
import { useRootStore } from "@/store";

const rootStore = useRootStore();
// const activePanel = ref("profile");
</script>

<style lang="scss" scoped>
.switch-profile-settings {
  position: absolute;
  display: flex;
  column-gap: 1.6vw;
  top: calc(80px + 3.7vh);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.48vh 0.8vw;
  z-index: 1;
  &_img {
    height: 2.96vh;
    width: 2.96vh;
    cursor: pointer;
  }
}
.profile-popup {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7.5px);
}
</style>
